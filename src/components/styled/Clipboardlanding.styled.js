import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
        margin:0;
    }
`
export const Styledclipboardlanding = styled(Vstack)`
    justify-content: center;
    text-align: center;
    @media screen and (max-width:1025px) {
        width:100%;
    }
    @media screen and (max-width:600px) {
        width:85%;
        margin:20% 0 0;
    }
`
export const Logo = styled.img`
    width: 8.5%;
    height: 8.5%;
    margin:9% auto 4%;
    @media screen and (max-width:600px) {
        width: 35%;
        height: 35%;
        margin:15% auto;
    }
`
export const Downloadios = styled.button`
    width:205px;
    height:50px;
    font-size: .95em;
    color:#fff;
    background-color:var(--Strong-Cyan);
    border-radius: 30px;
    border-style: none;
    box-shadow: 0 1.5px 1px 1.5px hsl(171, 36%, 44%);
    cursor: pointer;
    margin:0 .8% 9%;
    :hover{
        opacity:.8;
    }
    :active{
        transform: scale(.98);
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:3.5em;
    }
`
export const Downloadmac = styled(Downloadios)`
    box-shadow: 0 1.5px 1px 1.5px hsl(233, 100%, 66%);
    background-color:var(--Light-Blue);
    @media screen and (max-width:600px) {
        margin:0 0 35% 0;
    }
`
export const Heroimage = styled.img`
    display: flex;
    width:50%;
    height: 40%;
    margin:0 6% 7% -2%;
    @media screen and (max-width:600px) {
        width:auto;
        height: auto;
        margin:0 0 12%;
    }
`
export const Heroimage2 = styled(Heroimage)`
    width:60%;
    height: 60%;
    margin:0 auto 4%;
    @media screen and (max-width:600px) {
        width:auto;
        height: auto;
        margin:8% 0 15%;
    }
`
export const Hstackcentering = styled(Hstackflexi)`
    justify-content: space-evenly;
    margin:0 6em;
    @media screen and (max-width:1025px) {
        margin:0 3em;
    }
    @media screen and (max-width:600px) {
        margin:16% auto;
    }
`
export const Hstackcentering2 = styled(Hstackcentering)`
    margin:10% 3em;
    @media screen and (max-width:1025px) {
        margin:10% .1em;
    }
    @media screen and (max-width:600px) {
        justify-content: center;
        margin:10% auto 20%;
    }
`
export const Stacksupporticon = styled(Vstack)`
    width:70%;
    p{
        font-size: .82em;
        line-height: 1.5em;
        color:var(--Grayish-Blue);
        margin:3% 7% 6%;
    }
    @media screen and (max-width:1025px) {
        width:100%;
    }
    @media screen and (max-width:600px) {
        width:100%;
        margin:0;
        p{
            margin:0 auto;
        }
    }
`
export const Supporticon = styled.img`
    margin:0 auto 5%;
    @media screen and (max-width:1025px) {
        width:15%;
    }
    @media screen and (max-width:600px) {
        width: 15%;
        margin:15% auto 3%;
    }
`
export const Clientlogo = styled.img`
    height: 10%;
    @media screen and (max-width:1025px) {
        width:15%;
        height: 20%;
    }
    @media screen and (max-width:600px) {
        width:100%;
        height: auto;
        margin:20% 0;
    }
`
export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:3% 7.5em;
    @media screen and (max-width:1025px) {
        margin:3% 9%;
    }
    @media screen and (max-width:600px) {
        flex-direction: column;
        background-color: hsl(201, 11%, 66%, .2);
        margin:0 -10%;
    }
`
export const Logofooter = styled(Logo)`
    width: 5%;
    margin:0 7em 0 0;
    @media screen and (max-width:1025px) {
        margin:0 3em 0 0;
    }
    @media screen and (max-width:600px) {
        width: 20%;
        margin:20% 0 10%;
    }
`
export const Vspreader = styled(Vstack)`
    justify-content: space-between;
    margin: 0 4.5em 0 0;
    p{
        font-size: .95em;
        text-align:left;
        color:var(--Dark-Grayish-Blue);
        margin:.5em 0;
        cursor: pointer;
        :hover{
            color:var(--Strong-Cyan);
        }
        :active{
            color: var(--Grayish-Blue);
        }
    }
    @media screen and (max-width:1025px) {
        margin: 0 2.5em 0 0;
    }
    @media screen and (max-width:600px) {
        margin:0;
        p{
            text-align: center;
            margin:15% 0;
        }
    }
`
export const Hspreader = styled(Hstack)`
    margin: 0 0 0 15em;
    @media screen and (max-width:1025px) {
        margin:0 auto;
    }
    @media screen and (max-width:600px) {
        margin:10% 0;
    }
`
export const Socialicon = styled.img`
    width:35%;
    height:40%;
    margin:0 15% 0;
    cursor: pointer;
    :hover{
        filter: invert(43%) sepia(96%) saturate(2363%) hue-rotate(135deg) brightness(100%) contrast(101%);
    }
    :active{
        filter: invert(43%) sepia(96%) saturate(2363%) hue-rotate(130deg) brightness(80%) contrast(91%);
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    p{
        font-size: .7rem;
        color: var(--Strong-Cyan);
    }
    a {
        color: var(--Dark-Grayish-Blue);
    }
`
