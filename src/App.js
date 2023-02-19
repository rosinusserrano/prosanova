import './App.css';
import WholeSceneAsNodes from './components/WholeSceneAsNodes';
import WholeScene from './components/WholeScene';
import React from 'react';

function App() {

  const wholeScene = true

  return (
    <div className="App1">
      <header className="App-header">
        {/* <WholeScene></WholeScene> */}
        <WholeSceneAsNodes></WholeSceneAsNodes>
      </header>
    </div>
  );
}

export default App;
