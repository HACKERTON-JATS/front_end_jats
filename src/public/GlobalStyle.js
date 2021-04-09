import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.png";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 19px;
    }
    p{
        margin: 0;
    }
    a{
        color: red;
    }
`

export default GlobalStyle;