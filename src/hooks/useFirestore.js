import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFireStore = (collection) => {
    const [ docs, setDocs ] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            //everytime an image is added it is notified by the snapshot
            .onSnapshot(snap => {
                //create an array of document that will return 
                let documents = [];
                // push the datas of the documents into the document 
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });

        return () => unsub();

    }, [collection])

    return { docs };
}

export default useFireStore;