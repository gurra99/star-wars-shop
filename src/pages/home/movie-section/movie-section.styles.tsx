import styled from "styled-components";
import {dimensions} from "../../../utilities/dimensions";

export const Container = styled.div`
    width: min(95%, 62.5rem);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: ${dimensions.tablets}) {
       width: min(90%, 62.5rem);
       flex-direction: row;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap; 
    }
`

export const LayoutButtonContainer = styled.div`
    width: 80%;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 1.25rem;
    margin-bottom: 0.625rem;
    
    @media (min-width: 892px) {
        width: 46.75rem;
        justify-content: flex-end;
        margin-bottom: 0; 
    }
    
     @media (min-width: ${dimensions.largeDevices}) {
         width: 46.75rem;
    }
`