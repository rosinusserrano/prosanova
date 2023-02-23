import { useLoader } from "@react-three/fiber";
import { GLB_FILE } from "constants";
import { DRACOLoader, GLTFLoader } from "three-stdlib";



export function useProsanovaScene() {
    return useLoader(GLTFLoader, GLB_FILE, (loader) => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader)
    })
}