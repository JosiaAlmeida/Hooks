import React from 'react'
import Jsx from './component/Jsx'

function App() {
  const temperatura =20
  return (
    <div className="App">
      <h1>Hello, Word</h1>
      {temperatura >20 ? <Jsx /> : "Sem component"}
    </div>
  );
}

export default App;
