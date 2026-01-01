
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm'; // We might not have maath, let's implement simple random points or check if we can install maath. 
// Actually threejs has buffer geometry helpers. Let's make it simple.

const ParticleField = (props) => {
    const ref = useRef();

    // Generate random points
    const points = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;     // x: -5 to 5
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y: -5 to 5
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z: -5 to 5
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00EEFF"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Background3D;
