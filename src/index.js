import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import './font.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  styles: {
    messages: {
      sent: {
        backgroundColor: "#130682",
        color: "white",
        alignSelf: "flex-end",
      },
      received: {
        backgroundColor: "#C4C4C4",
        color: 'black',
        alignSelf: "flex-start",
      },
    },
  },
  fonts: {
    heading: "Hellix-Bold, sans-serif",
    body: "Hellix-Medium, sans-serif",
  },
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
