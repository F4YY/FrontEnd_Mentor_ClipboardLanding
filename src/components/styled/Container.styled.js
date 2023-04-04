import styled from "styled-components";
import bgheaderdesktop from '../images/bg-header-desktop.png';
import bgheadermobile from '../images/bg-header-mobile.png';

export const Container = styled.div`
    /* @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap'); */
    //Primary:
    --Strong-Cyan: hsl(171, 66%, 44%);
    --Light-Blue: hsl(233, 100%, 69%);
    //Neutral:
    --Dark-Grayish-Blue: hsl(210, 10%, 33%);
    --Grayish-Blue: hsl(201, 11%, 66%);
    font-size: 18px;
    font-family: 'Bai Jamjuree', sans-serif;
    --regular: 400;
    --semibold: 600;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    background-image: url(${bgheaderdesktop});
    background-repeat: no-repeat;
    h1{
        font-size: 2.2em;
        color:var(--Dark-Grayish-Blue);
        margin:1% 0;
    }
    h2{
        font-size: 1.75em;
        color:var(--Dark-Grayish-Blue);
        margin:1% 0;
    }
    h3{
        font-size: 1.2em;
        color:var(--Dark-Grayish-Blue);
        margin:0;
    }
    .p_history{
        font-size: 1em;
        line-height: 1.5em;
        color:var(--Grayish-Blue);
        margin:0 27% 3%;
    }
    .p_keeptrack{
        font-size: .9em;
        line-height: 1.7em;
        color:var(--Grayish-Blue);
        margin:0 26% 6%;
    }
    .besidecomputer{
        text-align: left;
        margin:5% 2%;
    }
    .besidecomputer p{
        font-size: .85em;
        line-height: 1.5em;
        color:var(--Grayish-Blue);
        margin:2% 43% 10% 0;
    }
    .accessclipboard,.p_supercharge,.clipboardmacios{
        font-size: .9em;
        line-height: 1.7em;
        color:var(--Grayish-Blue);
        margin:0 26% 5%;
    }
    @media screen and (max-width:600px) {
        background-image: url(${bgheadermobile});
        background-size:contain;
        h1{
            font-size: 1.95em;
            margin:0 0 5% 0;
        }
        h2{
            margin:5% auto;
        }
        h3{
            font-size: 1.5em;
            margin:3% auto;
        }
        .p_history{
            margin:0 auto 12%;
        }
        .p_keeptrack{
            margin:0 auto 20%;
        }
        .besidecomputer{
            text-align: center;
            margin:0 auto;
        }
        .besidecomputer p{
            margin:0 auto 10%;
        }
        .h2_accessclip{
            margin:20% auto 5%;
        }
        .accessclipboard,.p_supercharge,.clipboardmacios{
            margin:0 auto 10%;
        }
    }
`