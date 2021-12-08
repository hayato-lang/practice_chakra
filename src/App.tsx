import {BrowserRouter} from "react-router-dom";
import {
  ChakraProvider,
  Button
} from "@chakra-ui/react"

import theme from "./theme/theme"


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Button colorScheme="teal">ハゲタコ</Button>
      <p>aaaaa</p>
    </BrowserRouter>
  </ChakraProvider>
)
