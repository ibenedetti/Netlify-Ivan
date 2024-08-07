import { Canvas } from "@react-three/fiber";
import Screen from "./Screen";
import { OrbitControls } from "@react-three/drei";
import { animated, useSpring } from '@react-spring/three';
import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";

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

    // Adjust the rotation to tilt the model more subtly
    const props = useSpring({
        rotation: [
            mousePosition.y * -0.5, // Smaller tilt
            mousePosition.x * 1.5,  // Larger side tilt
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
                    shadows // Enable shadows
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight 
                        position={[2, 2, 2]} 
                        intensity={1.5} // Increase light intensity
                        castShadow // Enable shadow casting
                        shadow-mapSize-width={2048} // Shadow map resolution
                        shadow-mapSize-height={2048} // Shadow map resolution
                        shadow-bias={-0.0001} // Adjust shadow bias
                    />
                    
                    {/* Wall behind the model */}
                    
                    <animated.group rotation={props.rotation}>
                        {/* Create a new group to act as the pivot */}
                        <group position={[-9, 0, 0]}> {/* Shift the group to the left */}
                            <Screen position={[10, 0, 0]} scale={13} rotation={[0, -1.5, 0]} castShadow /> {/* Offset the model to the right */}
                        </group>
                    </animated.group>
                    
                    <OrbitControls autoRotate={false} enableRotate={false} enableZoom={false} enablePan={false} />
                </Canvas>
            </div>
        </MotionConfig>
    );
};

export default ScreenScene;
