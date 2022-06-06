import React, { useState } from 'react'

const UploadForm = () => {

    //download the file, null cause need to click
    const [file, setFile] = useState(null);

    //array of allowed type
    const allowedType = [
        
    ]

    //we get the file
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected){
            setFile(selected)
        }
    }

  return (
      <form action="">
          <input type="file" onClick={changeHandler}/>
      </form>
  )
}

export default UploadForm;