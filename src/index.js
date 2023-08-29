import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  components: {
    Steps,
  },
});
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
