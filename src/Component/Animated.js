import React from "react";
import { Sphere, MeshDistortMaterial} from "@react-three/drei";

export default function AnimatedSharp() {
    return (
    <Sphere visible args={[1,100,200]} scale ={1.5}>
        <MeshDistortMaterial 
            color="#C44444" attach="material" distort={0.7}
            speed={2}
            roughness={1}
            />
    </Sphere>
    );
}