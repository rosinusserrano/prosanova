import './App.css';
import { Canvas } from '@react-three/fiber';
import WholeSceneAsNodes from './components/WholeSceneAsNodes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Canvas
          style={{
            height: "100vh",
            width: "100vw"
          }}>
          <WholeSceneAsNodes></WholeSceneAsNodes>
        </Canvas>
      </header>
    </div>
  );
}

export default App;
