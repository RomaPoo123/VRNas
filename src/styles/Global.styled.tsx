import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    
    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    
    body {
        width: 100%;
        background-color: rgb(24, 24, 27);
        margin: 0;
        font-family: "Chakra Petch", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font}
}

a {
    font-family: "Chakra Petch", sans-serif;
    text-decoration: none;
}
ul {
    list-style: none;
}
button {
    background-color: unset;
    border: none;
}
h1 {

}

h2 {
    
}

h3 {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0%;
}
h4 {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0%;
}

`