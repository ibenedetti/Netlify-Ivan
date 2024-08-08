import { Canvas } from "@react-three/fiber";
import { animated, useSpring } from '@react-spring/three';
import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import Screen from "./Screen"; 

const ScreenScene = ({ width = "150vw", height = "180vh" }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const props = useSpring({
        rotation: [
            mousePosition.y * -0.5, 
            mousePosition.x * 1.5,  
            0
        ],
    });

    return (
        <MotionConfig transition={{
            type: "spring",
            mass: 5,
            stiffness: 10,
            damping: 10,
            restDelta: 0.0001,
        }}>
            <div className="screen-scene-container" style={{ width, height }}>
                <Canvas 
                    className="screen-canvas w-full h-screen bg-transparent z-10" 
                    style={{ pointerEvents: "none" }} 
                    camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }} 
                    shadows
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight 
                        position={[2, 2, 2]} 
                        intensity={1.5}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-bias={-0.0001}
                    />
                    
                    <animated.group rotation={props.rotation}>
                        <group position={[-9, 0, 0]}>
                            <Screen position={[10, 0, 0]} scale={13} rotation={[0, -1.5, 0]} castShadow />
                        </group>
                    </animated.group>
                    
                    <OrbitControls autoRotate={false} enableRotate={false} enableZoom={false} enablePan={false} />
                </Canvas>
            </div>
        </MotionConfig>
    );
};

export default ScreenScene;
