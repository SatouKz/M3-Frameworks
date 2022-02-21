import * as React from "react";

import {
  // Container,
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Tag,
  Link,
  VStack,
  Divider,
} from "@chakra-ui/react";
import heroImage from "./assets/images/portada.jpg";
import cuevanaLogo from "./assets/images/cuevana.jpg";
function App() {
  return (
    <>
      {/* <Container bg='rgb(2,0,36) linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' color='white'> */}
      <Box as="header" textAlign="center" py="10px">
        <strong>Logo</strong>
      </Box>
      <Box as="main">
        <Image
          src={heroImage}
          alt="No Way Home"
          boxSize="100vw"
          objectFit="cover"
        />
        <Box px="40px">
          <Heading as="h1" size="md" my="20px">
            Spider-Man No Way Home
          </Heading>
          <Text fontSize="small">
            Tras descubrirse la identidad secreta de Peter Parker como
            Spider-Man, la vida del joven se vuelve una locura. Peter decide
            pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo
            sale mal y provoca una fractura en el multiverso.
          </Text>
          <HStack my="25px">
            <Tag>Acción</Tag>
            <Tag>Aventura</Tag>
            <Tag>Fantasía</Tag>
          </HStack>
          <Heading>Donde encontrarla</Heading>
          <HStack>
            <Link
              href="https://cuevana3.io/52436/spider-man-no-way-home"
              isExternal
            >
              <Image
                src={cuevanaLogo}
                alt="Cuevana3"
                boxSize="90px"
                objectFit="cover"
                h="50px"
                borderRadius="5px"
              />
            </Link>
          </HStack>
          <Heading>Informacion</Heading>
          <VStack align="flex-start">
            <Text>
              <strong>Directores</strong>
              <Box as="span" m="10px">
                Brian Avery Galligan, David H. Venghaus Jr., George Cottle, Jon
                Watts
              </Box>
            </Text>
            <Divider />
            <Text>
              <strong>Año</strong>
              <Box as="span" m="10px">
                2021
              </Box>
            </Text>
            <Divider />
          </VStack>
        </Box>
      </Box>
      {/* </Container> */}
    </>
  );
}

export default App;
