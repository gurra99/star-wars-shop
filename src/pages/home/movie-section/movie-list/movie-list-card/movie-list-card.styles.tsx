import styled from "styled-components";
import {dimensions} from "../../../../../utilities/dimensions";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
    margin-bottom: 1.2rem;
    border-bottom: 1px solid #d2d1d1;
    
    @media (min-width: ${dimensions.largeDevices}) {
        justify-content: flex-start;
        width: min(100%, 46.75rem);
        border: solid 4px var(--color-dark-blue);
    }  
`

export const ImageContainer = styled.div`
    padding: 1.25rem 0 0 2%;  

    @media (min-width: ${dimensions.largeDevices}) {
        width: 23.33%;  
        padding: 0px;
    }   
`

export const Image = styled.img`
    width: 100%;
    height: 15.6rem; 
`

export const InformationContainer = styled.div`
    padding: 0.93rem 0 0 2%;  
    
    @media (min-width: ${dimensions.largeDevices}) {
        width: 33.33%;  
    }      
`

export const PlotContainer = styled.div`
    padding: 5%;
    
    @media (min-width: ${dimensions.tablets}) {
        width: 80%;  
    } 
    
    @media (min-width: ${dimensions.largeDevices}) {
        padding: 1.5% 0 0 2%;
        width: 33.33%;  
    } 
`

export const MovieCardPlot = styled.div`
    width: 100%;
    -webkit-line-clamp: 10; 
    -webkit-box-orient: vertical;   
    line-clamp: 10; 
    line-height: 1.3;
    color: var(--color-neutral); 
    overflow: hidden;
    display: -webkit-box;    
    font-size: var(--fs-400);
    color: var(--color-dark-grey); 
`

export const PlotName = styled.p`
    display: inline-block;
    color: var(--color-primary);
`

export const PlotValue = styled.span`
    margin-left: 0.01rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-block: 20px 10px;
`