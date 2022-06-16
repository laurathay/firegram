import React from 'react';
import ProgressBar from './comps/ProgressBar';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
// https://www.youtube.com/watch?v=vUe91uOx7R0
function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ProgressBar />
      <ImageGrid />
    </div>
  );
}

export default App;
