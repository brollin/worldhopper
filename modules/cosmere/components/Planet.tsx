import { observer } from "mobx-react-lite";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text, useTexture } from "@react-three/drei";
import { SphereGeometry, Vector2 } from "three";
import { useRef } from "react";

import { ShardWorld } from "@/modules/cosmere/models/ShardWorld";
import Glow from "@/modules/cosmere/components/Glow";
import Clouds from "@/modules/cosmere/components/Clouds";

type PlanetProps = {
  shardWorld: ShardWorld;
};

const Planet = observer(({ shardWorld }: PlanetProps) => {
  const sphere = useRef<SphereGeometry>(null);

  const [
    planetTexture,
    roughnessTexture,
    displacementTexture,
    normalTexture,
    aoTexture,
  ] = useTexture([
    "/Rock_047/Rock_047_BaseColor.jpg",
    "/Rock_047/Rock_047_Roughness.jpg",
    "/Rock_047/Rock_047_Height.png",
    "/Rock_047/Rock_047_Normal.jpg",
    "/Rock_047/Rock_047_AmbientOcclusion.jpg",
  ]);

  useFrame((state, delta) => {
    sphere.current?.rotateY(delta * 0.05);
  });

  return (
    <>
      <Text position={[0, 15, 0]} fontSize={1.7} color={0xffffff}>
        {shardWorld.name}
      </Text>
      <Sphere ref={sphere} args={[10, 32, 32]} castShadow>
        <meshStandardMaterial
          attach="material"
          map={planetTexture}
          roughnessMap={roughnessTexture}
          roughness={1}
          displacementMap={displacementTexture}
          displacementScale={0.7}
          normalMap={normalTexture}
          normalScale={new Vector2(0, 0)}
          aoMap={aoTexture}
        />
      </Sphere>
      <Clouds shardWorld={shardWorld} />
      <Glow shardWorld={shardWorld} />
      <group position={[(shardWorld.shards.length - 1) * -5, -15, 0]}>
        {shardWorld.shards.map((shard, index) => (
          <Text
            key={index}
            position-x={index * 10}
            onClick={() => alert(shard)}
          >
            {shard}
          </Text>
        ))}
      </group>
      <group position={[(shardWorld.investitures.length - 1) * -5, -18, 0]}>
        {shardWorld.investitures.map((investiture, index) => (
          <Text
            key={index}
            position-x={index * 10}
            onClick={() => alert(investiture)}
          >
            {investiture}
          </Text>
        ))}
      </group>
    </>
  );
});

export default Planet;
