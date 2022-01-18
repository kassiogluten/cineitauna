import React, {  } from "react";
import { Button, Flex } from "@chakra-ui/react";

// import { movies } from "./movies";

export function Footer() {
  return (
    <Flex
      mb={4}
      mt={50}
      flexDir="column"
      as="footer"
      justify="center"
      align="center"
    >
      <a href="https://kassio.site">
        <Button>Contato</Button>
      </a>
    </Flex>
  );
}
