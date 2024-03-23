import styled from "styled-components"
import {dimensions} from "../../../utilities/dimensions";

export const Container = styled.div`
    display: flex;
    width: min(80%, 15.6rem);
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--color-grey);
    margin-block: 0.94rem;
    
    @media (min-width: ${dimensions.mediumDevices}) {
        width: min(80%, 44rem);
    }
`

export const Image = styled.img`
    width: 7.5rem;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 1.25rem;
    white-space: normal;
    justify-content: space-between;

    @media (min-width: ${dimensions.mediumDevices}) {
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
`

export const ProductNameContainer = styled.div`
    display: flex;
    font-size: var(--fs-300);

    @media (min-width: ${dimensions.mediumDevices}) {  
        flex: 4;      
        flex-direction: column;      
        
        & p:last-child {
            color: var(--color-grey);
        }
    }
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: var(--fs-300);
    
    @media (min-width: ${dimensions.mediumDevices}) {  
        flex-direction: column;
        flex: 2;  
        justify-content: center;
        text-align: center;
    }
    
    & p:last-child {
        color: var(--color-grey);
    }
`

export const Text = styled.p`
    margin-right: 0.6rem;
`

export const QuantityContainer = styled.div`
    margin-bottom: 0.5rem;
    font-size: var(--fs-300);
    
    @media (min-width: ${dimensions.mediumDevices}) {  
        flex: 2; 
        margin-top: 0.5rem; 
    }
`

export const ButtonContainer = styled.div`  
    @media (min-width: ${dimensions.mediumDevices}) {  
        flex: 2;  
    }  
`