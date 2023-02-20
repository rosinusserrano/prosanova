import { useLoader } from "@react-three/fiber";
import { DRACOLoader, GLTFLoader } from "three-stdlib";



export function getProsanovaScene() {
    return useLoader(GLTFLoader, process.env.REACT_APP_GLB_FILE, (loader) => {
        console.log(12345)
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader)
    })
}