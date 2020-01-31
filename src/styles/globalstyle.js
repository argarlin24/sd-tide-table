import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    background: #f4f6f8;
  }

`;
export default GlobalStyle;
