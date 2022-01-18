import React, {  } from "react";
import {
  Flex,
  Heading,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";
import { Capa } from "./Capa";

export const Arte = ({ selectedMovie }) => (
  <Flex p="1rem" align="center" flexDir="column">
    <VStack
      overflow="scroll"
      h={1000}
      w={1000}
      pos="relative"
      id="capture"
      bg="#001F71"
      my={4}
      justify="space-between"
      maxW={1000}
    >
      <Box
        background={`linear-gradient( rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.2)100%), url(https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}) no-repeat center `}
        bgSize="cover"
        w="full"
        h={500}
      >
        <Heading
          textAlign="center"
          h={200}
          wordBreak="break-word"
          fontSize={80}
          p={14}
        >
          EM <strong>CARTAZ</strong>
        </Heading>
      </Box>

      <Capa selectedMovie={selectedMovie} />

      <Box align="right" w="full" pt={150} bg="white">
        <Image w={150} alt="logo" src="/logo.png" pr={6} pb={4} />
      </Box>
    </VStack>
  </Flex>
);
