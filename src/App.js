import React from 'react'
import Jsx from './component/Jsx'
import Lista from './component/Lista'

function App() {
  const temperatura =20
  return (
    <div className="App">
      <h1>Hello, Word</h1>
      {temperatura >20 ? <Jsx /> : "Sem component"}
      <Lista />
    </div>
  );
}

export default App;
