import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Box3, Vector3 } from "three";
import computerScene from "../assets/3d/untitled.gltf";

const Computer = ({ scale, position, rotation }) => {
    const computerRef = useRef();
    const { scene } = useGLTF(computerScene);

    useEffect(() => {
        const box = new Box3().setFromObject(scene);
        const size = new Vector3();
        box.getSize(size);
        console.log("Bounding Box Size:", size);
    }, [scene]);

    return (
        <primitive ref={computerRef} object={scene} position={position} scale={scale} rotation={rotation} />
    );
};



export default Computer;
