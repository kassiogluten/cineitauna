import React, { useState } from "react";
import {
  Text,
  VStack,
  HStack,
  Center,
  Image,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";

export const Capa = function ({ selectedMovie }) {
  const [idade, setIdade] = useState(12);
  return (
    <VStack pos="absolute" bottom={50} right={0} left={0} spacing={0}>
      <Editable fontWeight={700} fontSize={24} defaultValue="SALA 1 - DUBLADO">
        <EditablePreview />
        <EditableInput w={230} />
      </Editable>
      {/* <Heading fontSize={24}>SALA 1 - DUBLADO</Heading> */}
      <HStack pb={6}>
        <Center
          align="center"
          justify="center"
          fontSize={19}
          w={8}
          h={8}
          bg={
            (idade > 17 && "black") ||
            (idade > 15 && "red.500") ||
            (idade > 13 && "orange.400") ||
            (idade > 11 && "yellow.300") ||
            (typeof idade != "number" && "green.500")
          }
          color="white"
          lineHeight={1.75}
          fontWeight={700}
        >
          <Editable
            textShadow="0 0 4px #AAA"
            fontWeight={700}
            fontSize={18}
            defaultValue={idade}
          >
            <EditablePreview />
            <EditableInput onChange={(e) => setIdade(e.target.value)} />
          </Editable>
        </Center>
        <Editable fontSize={28} defaultValue="17:30 E 20:30">
          <EditablePreview />
          <EditableInput w={200} />
        </Editable>
      </HStack>

      <Image
        boxShadow="0 0 20px #001F7144"
        borderRadius={10}
        h={600}
        alt={selectedMovie.title}
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
      />
      <Editable
        pt={6}
        color="#001F71"
        fontSize={14}
        defaultValue="PROGRAMAÇÃO VÁLIDA DE 13/01 A 19/01 -"
      >
        <EditablePreview />
        <EditableInput w={250} />
      </Editable>
      <Text color="#001F71" fontSize={14}>
        (EXCETO SEGUNDA-FEIRA) - SUJEITA A ALTERAÇÕES *
      </Text>
    </VStack>
  );
};
