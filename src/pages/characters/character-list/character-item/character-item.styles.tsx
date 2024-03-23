import styled from "styled-components"
import {dimensions} from "../../../../utilities/dimensions";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 8.5rem;
    height: 16.4rem;
    padding: 0.31rem;
    margin: 1.25rem;
    background-color: var(--color-dark-blue);
    border-radius: 10px;
    position: relative;
    color: var(--color-secondary);
    text-decoration: none;
    
    @media (min-width: ${dimensions.mediumDevices}) {
        width: 10.5rem;
        height: 20.4rem;
    }
    
    @media (min-width: ${dimensions.largeDevices}) {
        width: 12.5rem;
        height: 22.4rem;
    }
`

export const Image = styled.img`
    border-radius: 10px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    
    @media (min-width: ${dimensions.mediumDevices}) {
        margin-bottom: 1rem;
    }
`

export const CardHeader = styled.h1`
    font-size: 1.56rem;
    margin: 0.62rem 0.2rem 0.1rem 0.2rem;
    text-align: center;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: var(--fs-400);
    
    @media (min-width: ${dimensions.mediumDevices}) {
        margin-bottom: 0.2rem;
        font-size: var(--fs-500);
    }
    
    @media (min-width: ${dimensions.largeDevices}) {
        margin-bottom: 0.6rem;
        font-size: var(--fs-600);
    }
`