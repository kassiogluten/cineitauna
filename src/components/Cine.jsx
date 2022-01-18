import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import { Arte } from "./Arte";
import { BotoesDownload } from "./BotoesDownload";
import { ListaDeFilmes } from "./ListaDeFilmes";

import { localMovies } from "./movies";

export function Cine() {
  
  useEffect(() => {
    async function get() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`
        );

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.log("Busca falhou, exibindo filmes estáticos");
      }
    }
    get();
  }, []);

  const [movies, setMovies] = useState([...localMovies]);

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
        var fileName = `${selectedMovie.title.trim()}.jpg`;
        saveAs(image, fileName);
      }
    );
  }

  return (
    <>
      {selectedMovie.id ? (
        <Arte selectedMovie={selectedMovie} />
      ) : (
        <Heading pt={10} textAlign="center">
          Selecione um filme
        </Heading>
      )}
      {selectedMovie.id && <BotoesDownload salvar={salvar} />}
      <ListaDeFilmes
        setSelectedMovie={setSelectedMovie}
        movies={movies}
        selectedMovie={selectedMovie}
      />
    </>
  );
}
