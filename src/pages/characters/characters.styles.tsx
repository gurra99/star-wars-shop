import styled from "styled-components"
import {dimensions} from "../../utilities/dimensions";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    padding-bottom: 1.87rem;
`

export const Line = styled.div`
    width: min(80%, 31.1rem);
    border-bottom: 1px solid var(--color-grey);
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        width: min(60%, 31.1rem);
    }
`

export const CharacterListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Label = styled.label`
    display: flex;  
    margin-left: 0.35rem;
    font-size: var(--fs-400);
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        font-size: var(--fs-500);
    }
`

export const LoadingSpinnerContainer = styled.div`
    margin-block: 1.87rem;
`



