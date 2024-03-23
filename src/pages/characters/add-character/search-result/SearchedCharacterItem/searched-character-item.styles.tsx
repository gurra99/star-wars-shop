import styled from "styled-components"
import {dimensions} from "../../../../../utilities/dimensions";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    
    @media (min-width: ${dimensions.mediumDevices}) { 
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 3.1rem;
    height: 3.1rem;
`

export const Name = styled.p`
    font-size: 0.88rem;
`