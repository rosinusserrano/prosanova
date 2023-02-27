import "./App.css";

import Imprint from "./components/Imprint";

import WholeSceneAsNodes from "./components/WholeSceneAsNodes";
import WholeScene from "./components/WholeScene";
import React, { StrictMode, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import "./styles/imprint.css";
import ImprintPage from "./pages/ImprintPage";
import Test from "./pages/Test";
import { Canvas } from "@react-three/fiber";
import { useProsanovaScene } from "functions";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const gltf = useProsanovaScene();
  const [loading, setLoading] = useState(true);
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route
            index
            element={
              <div className="App">
                <Imprint />
                {/* <LoadingScreen /> */}
                <header className="App-header">
                  <div style={{ zIndex: 1 }}>
                    {loading ? <LoadingScreen></LoadingScreen> : <></>}
                  </div>
                  <Suspense>
                    <Canvas
                      style={{ height: "100vh", width: "100vw" }}
                      shadows
                      frameloop="demand"
                    >
                      <WholeSceneAsNodes
                        gltf={gltf}
                        onFinishedLoading={() => {
                          setTimeout(() => {
                            setLoading(false);
                          }, 1000);
                        }}
                      />
                    </Canvas>
                  </Suspense>
                </header>
              </div>
            }
          />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route
            path="/ref"
            element={
              <div className="App">
                <Imprint />
                <header className="App-header">
                  <WholeScene />
                </header>
              </div>
            }
          ></Route>
          <Route
            path="/test"
            element={
              <div className="App">
                <Imprint />
                <header className="App-header">
                  <Canvas style={{ height: "100vh", width: "100vw" }}>
                    <ambientLight></ambientLight>
                    <pointLight position={[-1.5, -0.5, 4]}></pointLight>
                    <Test />
                  </Canvas>
                </header>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
