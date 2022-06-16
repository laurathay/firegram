import React from 'react';
import Modal from './comps/Modal';
import ProgressBar from './comps/ProgressBar';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
// https://www.youtube.com/watch?v=vUe91uOx7R0
function App() {
  //null tant qu'il n'est pas cliquer sur une image 
  const [selectedItem, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ProgressBar />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {/* lorsqu'il est selectionné seulement qu'il s'agrandit */}
      { selectedImg && <Modal selectedImg={selectdeImg}/>}
    </div>
  );
}

export default App;
