import { useEffect, useState } from "react";
import { projecStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {

    const [ progress, setProgress ] = useState(0);
    const [ error, setError ] = useState(null);
    const [ url, setUrl ] = useState(null);


    useEffect(() => {
        //references
        const storageRef = projecStorage.ref(file.name);
        //where we put our pictures in the db after its downloaded in firebase with method collection
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage;