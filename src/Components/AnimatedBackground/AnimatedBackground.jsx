import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';

const Particles = (props) => {
  const ref = useRef();
  
  const particles = useMemo(() => {
  const result = random.inSphere(new Float32Array(5000), { radius: 1.5 });
  return result && result.length ? result : new Float32Array([0, 0, 0]);
}, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;