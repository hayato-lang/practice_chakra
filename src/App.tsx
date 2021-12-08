import * as React from "react"
import {
  ChakraProvider,
  Button
} from "@chakra-ui/react"


export const App = () => (
  <ChakraProvider>
    <Button colorScheme="teal">ハゲタコ</Button>
  </ChakraProvider>
)
