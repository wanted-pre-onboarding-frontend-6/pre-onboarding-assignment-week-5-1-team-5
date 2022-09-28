import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Noto-sans";
        src: url("assets/font/NotoSansKR-Regular.otf") format('font-otf');
    }
    @font-face {
        font-family: 'Bubblegum-sans';
        src: url('assets/font/BubblegumSans-Regular.ttf') format('font-ttf');
    }
    * {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
        font-family: 'Noto-sans'
    }
    *,
    :after,
    :before {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        flex-shrink: 0;
    }
    :root {
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        cursor: default;
        line-height: 1.5;
        overflow-wrap: break-word;
        -moz-tab-size: 4;
        tab-size: 4;
    }
    html,
    body {
        height: 100%;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        background: none;
        border: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        outline: none;
        color: inherit;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    ul,
    li {
        list-style: none;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
    }
    input {
        text-decoration: none;
        background-color: none;
        outline: none;
        transition: all 0.1s linear;
    }
    button {
        background-color: transparent;
        text-decoration: none;
        border: none;
        outline: none;
        cursor: pointer;
        font: inherit;
    }
`;
export default GlobalStyle;
