import './App.css';

import Imprint from './components/Imprint';

import WholeSceneAsNodes from './components/WholeSceneAsNodes';
import WholeScene from './components/WholeScene';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/fonts.css';
import './components/imprint.css';
import ImprintPage from 'pages/imprintpage';
import Test from 'pages/Test';
import { Canvas } from '@react-three/fiber';





function App() {

  return (
    <Router>
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
        <Route path="/ref" element={
          <div className='App'>
            <Imprint />
            <header className='App-header'>
              <WholeScene />
            </header>
          </div>}>
        </Route>
        <Route path="/test" element={
          <div className='App'>
            <Imprint />
            <header className='App-header'>
              <Canvas style={{ height: "100vh", width: "100vw" }}>
                <ambientLight></ambientLight>
                <pointLight position={[-1.5, -.5, 4]}></pointLight>
                <Test />
              </Canvas>
            </header>
          </div>}>
        </Route>
      </Routes>
    </Router>
  );

}

export default App;
