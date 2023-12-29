import { createGlobalStyle } from "styled-components";
import './fonts/styles.css';

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Poppins';
    }

    html, body{
        background-color: ${pr => pr.theme.background}
    }
`;
