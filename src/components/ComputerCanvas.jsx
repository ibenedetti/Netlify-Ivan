import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Computer from "./Computer";
import { OrbitControls } from "@react-three/drei";
import SciFi from "./Scifi";
import CanvasLoader from "./loader";

const handleCanvasClick = (event) => {
    if (event.button === 0) {
        const url = '/iframe/index.html';
        const windowFeatures = 'width=600,height=400,resizable,scrollbars,toolbar=no,menubar=no,location=no,directories=no,status=no,top=100,left=100';
        window.open(url, '_blank', windowFeatures);
    }   
};

const ComputerCanvas = ({ width = "100vw", height = "150vh" }) => {
  const [pointerEvents, setPointerEvents] = useState("auto");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setPointerEvents("none");
        setIsSmallScreen(true);
      } else {
        setPointerEvents("auto");
        setIsSmallScreen(false);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas 
      className="w-full h-screen bg-transparent z-10" 
      style={{ width, height, pointerEvents }} 
      camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }} 
      onPointerDown={handleCanvasClick} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 0]} intensity={3} />
        <Computer 
          name="Computer" 
          position={[0, 0.3, 0]} 
          scale={isSmallScreen ? 2 : 3} 
          rotation={[0, 3.2, 0]} 
        />
        <SciFi 
          position={[0, 1, 2]} 
          scale={isSmallScreen ? 6 : 12} 
          rotation={[0, 0, 0]} 
        />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableRotate={false} 
          enableZoom={false} 
          enablePan={false} 
        />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
