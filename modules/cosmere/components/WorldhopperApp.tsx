import { useContext } from "react";
import Head from "next/head";
import { Box, Card, ChakraProvider, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Leva } from "leva";

import theme from "@cosmere/theme";
import Store from "@cosmere/models/Store";
import StoreContext from "@cosmere/models/StoreContext";
import Experience from "@/modules/cosmere/components/Experience";

const Worldhopper = observer(() => {
  const store = useContext(StoreContext);

  return (
    <>
      <Head>
        <title>Cosmere Tour</title>
      </Head>
      {store.initialized ? (
        <>
          <Leva collapsed />
          <Box position="fixed" h="100vh" w="100vw">
            <Experience />
          </Box>
          {/* <VStack h="100vh" justifyContent="end">
            <Card size="md" w={370} padding={3} marginBottom={5}>
              testing
            </Card>
          </VStack> */}
        </>
      ) : null}
    </>
  );
});

const WorldhopperApp = () => (
  <ChakraProvider theme={theme}>
    <StoreContext.Provider value={new Store()}>
      <Worldhopper />
    </StoreContext.Provider>
  </ChakraProvider>
);

export default WorldhopperApp;
