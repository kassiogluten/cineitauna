import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Button,
  Wrap,
  Image,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import {
  FaCloudDownloadAlt,
  FaDownload,
  FaFileDownload,
  FaFilm,
} from "react-icons/fa";
import html2canvas from "html2canvas";
import { LogoSvg, WaveSvg } from "../icons";

export function Cine() {
  useEffect(() => {
    async function get() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`
      );

      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    }
    get();
  }, []);

  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState([]);

  function salvar() {
    const saveAs = (blob, fileName) => {
      var elem = window.document.createElement("a");
      elem.href = blob;
      elem.download = fileName;
      elem.style = "display:none;";
      (document.body || document.documentElement).appendChild(elem);
      if (typeof elem.click === "function") {
        elem.click();
      } else {
        elem.target = "_blank";
        elem.dispatchEvent(
          new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
          })
        );
      }
      URL.revokeObjectURL(elem.href);
      elem.remove();
    };

    html2canvas(document.querySelector("#capture"), { useCORS: true }).then(
      (canvas) => {
        var image = canvas.toDataURL("image/jpg", 1.0);
        var fileName = "Imagem.jpg";
        saveAs(image, fileName);
      }
    );
  }

  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p="5rem 1rem"
        align="center"
        justify="space-between"
        flexDir="column"
      >
        {selectedMovie.id ? (
          <>
            <VStack
              overflow="hidden"
              pos="relative"
              maxW={1000}
              h={1000}
              w="full"
              id="capture"
              bg="#001F71"
              m={4}
              justify="space-between"
              borderRadius={6}
              borderBottomWidth={4}
              borderBottomColor="blue.500"
            >
              <Flex justify="space-between" w="full">
                <Heading
                  p={14}
                  fontSize={70}
                  letterSpacing={10}
                  fontWeight={900}
                  w={500}
                  lineHeight={0.8}
                >
                  EM CARTAZ
                </Heading>

                <Image
                  h={350}
                  clipPath="ellipse(81% 93% at 82% 30%)"
                  alt={selectedMovie.title}
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
                />
              </Flex>
              <VStack
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -35%)"
                spacing={0}
              >
                <Editable
                  fontWeight={700}
                  fontSize={24}
                  defaultValue="SALA 1 - DUBLADO"
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
                {/* <Heading fontSize={24}>SALA 1 - DUBLADO</Heading> */}
                <HStack>
                  <Center
                    align="center"
                    justify="center"
                    fontSize={19}
                    w={8}
                    h={8}
                    bg="yellow.300"
                    color="white"
                    lineHeight={1.75}
                    fontWeight={700}
                  >
                    <Editable
                      textShadow="0 0 4px #AAA"
                      fontWeight={700}
                      fontSize={18}
                      defaultValue="12"
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                    {/* <Text textShadow="0 0 4px #AAA">12</Text> */}
                  </Center>
                  <Editable fontSize={24} defaultValue="17:30 E 20:30">
                    <EditablePreview />
                    <EditableInput w={150}/>
                  </Editable>
                  {/* <Heading fontWeight="normal" fontSize={24}>
                  17:30 E 20:30
                </Heading> */}
                </HStack>
                <Image
                  py={2}
                  w={380}
                  alt={selectedMovie.title}
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                />
                <Editable
                  fontSize={14}
                  defaultValue="PROGRAMAÇÃO VÁLIDA DE 13/01 A 19/01 -"
                >
                  <EditablePreview />
                  <EditableInput w={300} />
                </Editable>
                {/* <Text fontSize={14}>PROGRAMAÇÃO VÁLIDA DE 13/01 A 19/01 -</Text> */}
                <Text fontSize={14}>
                  (EXCETO SEGUNDA-FEIRA) - SUJEITA A ALTERAÇÕES *
                </Text>
              </VStack>
              <WaveSvg />
              <Image
                w={150}
                blendMode="hard-light"
                alignSelf="flex-end"
                alt="logo"
                src="/logo.png"
                pr={6}
                pb={4}
              />
            </VStack>
            <Button onClick={salvar} leftIcon={<FaDownload />}>
              Salvar imagem
            </Button>
          </>
        ) : (
          <Heading>Selecione um filme</Heading>
        )}
        <Wrap pt={4} justify="center">
          {movies ? (
            movies.map((movie) => (
              <HStack onClick={() => setSelectedMovie(movie)} key={movie.id}>
                <Image
                  border="2px"
                  borderColor={
                    selectedMovie.id === movie.id ? "red" : "transparent"
                  }
                  w={100}
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </HStack>
            ))
          ) : (
            <Heading>Nenhum filme encontrado</Heading>
          )}
        </Wrap>
      </Flex>
    </Flex>
  );
}
