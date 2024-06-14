import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style-type: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        position: relative;
        min-height: 100vh;
        padding-bottom: 2.5rem; /* Footer height */
    }
`;
