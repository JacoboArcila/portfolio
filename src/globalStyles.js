import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        background-color: ${({theme}) => theme.background};
        color: white;
        font-family: 'Montserrat', 'sans-serif';
    }
`
export default GlobalStyles;