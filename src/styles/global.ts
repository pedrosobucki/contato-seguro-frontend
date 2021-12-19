import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/office-background.png"

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #F0F2F5;
        --title: #363F5F;
        --text: #969CB3;
        --blue: #5429CC;
        --light-blue: #6933FF;
        --red: #E62E4D;
        --green: #33CC95;
        --main-shape: #FFFFFF;
        --orange: #F05340;
        --gray: #6C6C6C;

        // background: url(${backgroundImage})  no-repeat center center fixed;
        // backdrop-filter: blur(10px);

        // -webkit-background-size: cover;
        // -moz-background-size: cover;
        // -o-background-size: cover;
        // background-size: cover;

        // -webkit-font-smoothing: antialiased;
    }

    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{

        height: 100%;
        background: url(${backgroundImage})  no-repeat center center fixed;

        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        -webkit-font-smoothing: antialiased;

    }

    body, input, text-area, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    html{

        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }

    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgb(0, 0, 0, 0.5);

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;

        background: var(--background);
        padding: 3rem;
        border: 0;
        border-radius: 0.25rem;

        position: relative;
    }

    .react-modal-close{
        position: absolute;
        right: 1rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }


`