import styled from "styled-components"
import {dimensions} from "../../../utilities/dimensions";

export const CharacterListContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-inline: auto;
       
    & > {
        flex: 1;
    }
    
    @media (min-width: ${dimensions.largeDevices}) {
         min-width: 50rem;
    }
`

export const Header = styled.h1`
    width: 100%;
    text-align: center;
    margin-top: max(3%, 1.875rem);
    margin-bottom: 1.5%;
    letter-spacing: 0.05rem;
    word-spacing: 0.2rem;
    line-height: 2.1rem;
`

export const LoadingCharacters = styled.p`
    display: flex;
    justify-content: center;
    margin-block: 5%;
    font-size: 1.56rem;
    font-weight: bold;
`

export const TheresNoMoreCharacters = styled.p`
    display: flex;
    justify-content: center;
    margin-block: 5%;
    font-size: 1.56rem;
    font-weight: bold;
`
