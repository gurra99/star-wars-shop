import styled from "styled-components"
import {Link} from "react-router-dom"
import {dimensions} from "../../../../../utilities/dimensions";

export const Container = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0.9rem 1.1rem;
    color: var(--color-primary);
    text-decoration: none;
    border-radius: 10px;
    width: 14.3rem;
    border: solid 4px var(--color-dark-blue);
    overflow: hidden;
    
    &:hover {
        border: solid 4px var(--color-purple);  
    }
`

export const ContentContainer = styled.div`
    min-height: 13.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--color-white);
    padding-bottom: 5%;
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        min-height: 15.3rem;
    }
`

export const TabContainer = styled.div`
    display: flex;
    flexWrap: nowrap;
`

export const CardTitle = styled.h2`
    width: 13.7rem;
    text-align: center;
    font-size: var(--fs-400);
    font-weight: var(--fw-regular);
    word-spacing: 0.11em;
    margin: 0.5rem 0.19rem 0.32rem 0.19rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-inline: auto;
    padding-inline: 0.625rem;
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        font-size: var(--fs-500);
        margin: 0.7rem 0.19rem 0.32rem 0.19rem;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    margin: auto 0 auto 0;
    align-items: center;
    justify-content: center;
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        margin: auto 0 3% 0;
    }
`

export const Price = styled.p<{ discount: number }>`
    font-size: var(--fs-500);
    font-weight: bolder;
    white-space: nowrap;
    color: ${(props) => (props.discount ? "var(--color-discount)" : "none")};
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        font-size: var(--fs-600);
    }
`

export const DiscountContainer = styled.div`
    position: relative;
`

export const Image = styled.img` 
    height: 11.4rem;
    width: 100%;
    overflow: hidden;
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        height: 13.4rem;
    }
`

export const CrosseOutImg = styled.img`
    position: absolute;
    top: 1px;
    left: 8px;
    width: 6rem;
`

export const DiscountText = styled.p`
    font-size: var(--fs-400);
    color: var(--color-dark-grey);
    margin-left: 1.2rem;
`
