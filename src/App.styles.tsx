import styled from "styled-components";
import {dimensions} from "./utilities/dimensions";

export const Text = styled.p<{ align?: "left" | "center" | "right"; fontSize?: string; fontWeight?: string; }>`
    font-size:  ${({fontSize}) => (fontSize ? `${fontSize}` : "1rem")};
    font-weight: ${({fontWeight}) => (fontWeight ? `${fontWeight}` : "var(--fw-regular)")};
    width: 100%;
    text-align: ${({align}) =>
    align === "center" ? "center" : align === "right" ? "right" : "left"};
`;

export const AppContainer = styled.div`
    background-color: var(--color-site-background);
    min-height: 56rem;
`

export const RowContainer = styled.div`
    display: flex;
    margin-bottom: 2%;
`

export const RowName = styled.p<{ fontSize?: string; }>`
    font-size: ${({fontSize}) => (fontSize ? `${fontSize}` : "var(--fs-300)")};
    margin-right: 5px;
   
    @media (min-width: ${dimensions.tablets}) {
        font-size: ${({fontSize}) => (fontSize ? `${fontSize}` : "var(--fs-400)")};
   }
`

export const RowValue = styled.p<{ fontSize?: string; }>`
    font-size: ${({fontSize}) => (fontSize ? `${fontSize}` : "var(--fs-300)")};
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--color-dark-grey);
    white-space: nowrap;
    text-align: center;

    @media (min-width: ${dimensions.tablets}) {
        font-size: ${({fontSize}) => (fontSize ? `${fontSize}` : "var(--fs-400)")};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`