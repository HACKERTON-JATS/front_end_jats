import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.jpeg";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 100px;
    }
    p{
        margin: 0;
    }
    a{
        color: red;
    }
`

export default GlobalStyle;