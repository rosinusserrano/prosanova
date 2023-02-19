import './App.css';

import Imprint from './components/Imprint';

import WholeSceneAsNodes from './components/WholeSceneAsNodes';
import WholeScene from './components/WholeScene';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/fonts.css';
import './components/imprint.css';
import ImprintPage from 'components/pages/imprintpage';





function App() {

  const wholeScene = true

  return (
    // <div className="App">
    //   <>
    //     <Router>
    //       <Imprint />
    //       <Routes>
    //         <Route ></Route>
    //       </Routes>

    //     </Router>

    //   </>



    //   <header className="App-header">
    //     {/* <WholeScene></WholeScene> */}
    //     <WholeSceneAsNodes></WholeSceneAsNodes>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={
          <div className='App'>
            <Imprint />
            <header className='App-header'>
              <WholeSceneAsNodes />
            </header>
          </div>
        } />
        <Route path="/imprint" element={<ImprintPage />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App;
