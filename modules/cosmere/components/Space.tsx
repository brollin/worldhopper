import { observer } from "mobx-react-lite";
import { Environment } from "@react-three/drei";

const Space = observer(() => {
  // const store = useContext(StoreContext);

  // space textures from https://opengameart.org/content/space-skyboxes-1
  return (
    <Environment
      files={["1.png", "3.png", "5.png", "6.png", "2.png", "4.png"]}
      path="/space/"
      background={true}
    />
  );
});

export default Space;
