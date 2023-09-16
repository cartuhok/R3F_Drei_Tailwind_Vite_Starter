import React from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function CanvasContainer() {
    //Camera Settings if tweaks needed, camera={cameraSettings} on <Canvas>
    // const cameraSettings = {
    //   fov: 50,
    //   zoom: 1,
    //   near: 0.1,
    //   far: 2000,
    //   position: [ 0, 0, 5 ]
    // }

    return (
        <Canvas>
            <OrbitControls/>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    )
    }