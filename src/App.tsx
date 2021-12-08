import * as React from "react"
import {
  ChakraProvider,
  Button
} from "@chakra-ui/react"
import theme from "./theme/theme"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Button colorScheme="teal">ハゲタコ</Button>
    <p>aaaaa</p>
  </ChakraProvider>
)
