import { observer } from "mobx-react-lite";
import { useFrame, useThree } from "@react-three/fiber";
import {
  AdditiveBlending,
  Color,
  FrontSide,
  Mesh,
  ShaderMaterial,
} from "three";
import { useEffect, useMemo, useRef } from "react";
import { useControls } from "leva";

import vertexShader from "@cosmere/shaders/glow/vertex.glsl";
import fragmentShader from "@cosmere/shaders/glow/fragment.glsl";
import { ShardWorld } from "@/modules/cosmere/models/ShardWorld";

// inspired by:
// https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/Shader-Glow.html
// https://stemkoski.github.io/Three.js/Shader-Glow.html

type GlowProps = {
  shardWorld: ShardWorld;
};

const Glow = observer(({ shardWorld }: GlowProps) => {
  const shaderMaterial = useRef<ShaderMaterial>(null);
  const glowMesh = useRef<Mesh>(null);
  const { camera } = useThree();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    const scaleFactor = 1.02 + Math.sin(elapsedTime * 1.5) * 0.01;
    if (glowMesh.current)
      glowMesh.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value = elapsedTime;
      shaderMaterial.current.uniformsNeedUpdate = true;
    }
  });

  const uniforms = useMemo(
    () => ({
      c: { value: 1.1 },
      p: { value: 1.6 },
      glowColor: { value: new Color("#00a6ff") },
      viewVector: { value: camera.position },
      uTime: { value: 0 },
    }),
    [camera.position],
  );

  // debug
  const { glowColor, c, p } = useControls(
    "planet glow",
    {
      glowColor: "#00a6ff",
      c: 1.1,
      p: 1.6,
    },
    { collapsed: true },
  );
  useEffect(() => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.glowColor.value = new Color(glowColor);
      shaderMaterial.current.uniforms.c.value = c;
      shaderMaterial.current.uniforms.p.value = p;
    }
  }, [glowColor, c, p]);

  return (
    <mesh ref={glowMesh}>
      <sphereGeometry args={[10.75, 32, 32]} />
      <shaderMaterial
        ref={shaderMaterial}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        side={FrontSide}
        blending={AdditiveBlending}
        transparent
      />
    </mesh>
  );
});

export default Glow;
