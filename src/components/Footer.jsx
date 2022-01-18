import React, {  } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

// import { movies } from "./movies";

export function Footer() {
  return (
    <Flex
      mb={4}
      mt={50}
      as="footer"
      flexDir="column"
      justify="center"
      align="center"
      textAlign="center"
    >
      <a href="https://kassio.site">
        <Button mb={4}>Contato</Button>
      </a>
      <Text lineHeight={1.25}>Próximas atualizações: <br/>• Múltiplos filmes na mesma arte <br/>• Download 4k</Text>
    </Flex>
  );
}
