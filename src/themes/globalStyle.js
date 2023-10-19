import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.bgColor};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Poppins", sans-serif;
        margin: 0;

        @media ${({ theme }) => theme.medias.smartphones} {
            background: white;
        }  
    }

    button, input, select, textarea {
        font-family: "Poppins", sans-serif;
    }

    input[type="text"] {
        height: 46px;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
        color: ${({ theme }) => theme.colors.darkGrey};
        padding: 0 15px;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus{
        -webkit-box-shadow: 0 0 0 100px white inset;
    } 

    textarea {
        padding: 10px
    }
`;

export default GlobalStyle;
