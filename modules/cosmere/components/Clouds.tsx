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

import vertexShader from "@cosmere/shaders/clouds/vertex.glsl";
import fragmentShader from "@cosmere/shaders/clouds/fragment.glsl";
import { ShardWorld } from "@/modules/cosmere/models/ShardWorld";

const initialCloudColor = "#fbfbfb";
const initialCloudScale = 84;

type CloudsProps = {
  shardWorld: ShardWorld;
};

const Clouds = observer(({ shardWorld }: CloudsProps) => {
  const shaderMaterial = useRef<ShaderMaterial>(null);
  const cloudsMesh = useRef<Mesh>(null);
  const { camera } = useThree();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (cloudsMesh.current) {
      cloudsMesh.current.rotation.y = -elapsedTime * 0.01;
    }
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value = elapsedTime;
      shaderMaterial.current.uniformsNeedUpdate = true;
    }
  });

  const uniforms = useMemo(
    () => ({
      cloudColor: { value: new Color(initialCloudColor) },
      cloudScale: { value: initialCloudScale },
      viewVector: { value: camera.position },
      uTime: { value: 0 },
    }),
    [camera.position],
  );

  const { cloudColor, cloudScale } = useControls(
    "planet clouds",
    {
      cloudColor: initialCloudColor,
      cloudScale: { value: initialCloudScale, min: 0, max: 100 },
    },
    { collapsed: true },
  );

  useEffect(() => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.cloudColor.value = new Color(cloudColor);
      shaderMaterial.current.uniforms.cloudScale.value = cloudScale;
    }
  }, [cloudColor, cloudScale]);

  return (
    <mesh ref={cloudsMesh}>
      <sphereGeometry args={[10.7, 20, 16]} />
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

export default Clouds;
