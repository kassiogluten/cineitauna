import React from "react";
import { Heading, HStack, Wrap, Image } from "@chakra-ui/react";

export const ListaDeFilmes = ({ movies, selectedMovie, setSelectedMovie }) => (
  <Wrap pt={4} justify="center">
    {movies ? (
      movies.map((movie) => (
        <HStack onClick={() => setSelectedMovie(movie)} key={movie.id}>
          <Image
            _hover={{ filter: "brightness(1.1)", cursor: "pointer" }}
            w={150}
            border="2px"
            borderColor={selectedMovie.id === movie.id ? "red" : "transparent"}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </HStack>
      ))
    ) : (
      <Heading>Nenhum filme encontrado</Heading>
    )}
  </Wrap>
);
