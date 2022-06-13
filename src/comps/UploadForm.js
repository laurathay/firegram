import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    //download the file, null cause need to click
    const [file, setFile] = useState(null);
    //for errors
    const [error, setError] = useState(null);

    //array of allowed type
    const types = [ 'image/png' , 'image/jpeg' ];

    //we get the file
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('set the right type of file');
        }
    }

return (
    <form>
        <label>
            <input type="file" onChange={ changeHandler } />
            <span> + </span>
        </label>

        <div className="output">
            { error && <div className="error">{ error }</div> }
            { file && <div>{ file.name }</div>}
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>
    );
}

export default UploadForm;