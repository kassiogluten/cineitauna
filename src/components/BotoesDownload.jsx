import React, {  } from "react";
import {
  Heading,
  VStack,
  Button,
  Wrap,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

export const BotoesDownload = ({ salvar }) => (
  <VStack w="full">
    <Heading py={4}>Baixar Imagem</Heading>
    <Wrap justify="center" py={4}>
      <Button onClick={salvar} leftIcon={<FaDownload />}>
        FullHD
      </Button>
      <Button disabled leftIcon={<FaDownload />}>
        4k
      </Button>
      <Button disabled leftIcon={<FaDownload />}>
        Impressão CMYK
      </Button>
    </Wrap>
  </VStack>
);
