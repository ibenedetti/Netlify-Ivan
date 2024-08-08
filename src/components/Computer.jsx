import { useGLTF } from '@react-three/drei';

const Computer = (props) => {
  const { nodes, materials } = useGLTF('/3d/Computer.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.299}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Beige_Plastic} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Black_Plastic} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Shiny_Metal} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Screen} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Gray_Plastic} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Paper} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Red_Plastic} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.Dark_Plastic} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d/Computer.glb')

export default Computer
