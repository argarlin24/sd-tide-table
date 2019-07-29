import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    background: #373740;
  }

`;
export default GlobalStyle;
