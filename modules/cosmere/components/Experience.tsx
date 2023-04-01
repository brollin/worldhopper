import styles from "@/styles/Cosmere.module.css";
import { observer } from "mobx-react-lite";
import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";

import Controls from "@/modules/cosmere/components/Controls";
import Planet from "@/modules/cosmere/components/Planet";
import { shardWorlds } from "@/modules/cosmere/data/shardWorlds";
import Space from "@/modules/cosmere/components/Space";

const Experience = observer(() => {
  // const store = useContext(StoreContext);

  const { selectedWorld } = useControls({
    selectedWorld: { value: 0, step: 1, min: 0, max: 7 },
  });
  const {
    luminanceThreshold,
    luminanceSmoothing,
    intensity,
    mipmapBlur,
    radius,
    levels,
  } = useControls(
    "bloom effect",
    {
      luminanceThreshold: { value: 0, step: 0.01, min: 0, max: 2 },
      luminanceSmoothing: { value: 0.9, step: 0.01, min: 0, max: 1 },
      intensity: { value: 0.5, step: 0.01, min: 0, max: 1 },
      mipmapBlur: true,
      radius: { value: 0.85, step: 0.01, min: 0, max: 1 },
      levels: { value: 2, step: 1, min: 0, max: 10 },
    },
    { collapsed: true },
  );

  return (
    <Box position="fixed" h="100vh" w="100vw">
      <Canvas className={styles.canvas} shadows={true}>
        <Perf position="top-left" />
        <Planet shardWorld={shardWorlds[selectedWorld]} />
        <ambientLight intensity={0.1} />
        <directionalLight args={[0xffffff, 1]} position={[0, 0, 100]} />
        <Controls />
        <Space />
        <EffectComposer>
          <Bloom
            intensity={intensity}
            luminanceThreshold={luminanceThreshold}
            luminanceSmoothing={luminanceSmoothing}
            mipmapBlur={mipmapBlur}
            radius={radius}
            levels={levels}
          />
        </EffectComposer>
      </Canvas>
    </Box>
  );
});

export default Experience;
