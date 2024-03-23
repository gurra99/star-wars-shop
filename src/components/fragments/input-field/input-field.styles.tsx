import styled from "styled-components";

export const Container = styled.input`
    border: 2px solid var(--color-dark-blue);  
    border-radius: 40px;
    margin-bottom: 0.62rem;
    padding-left: 0.94rem;
    padding-block: 0.31rem;
    font-size: var(--fs-400);
    
    &:focus {
        border-color: var(--color-purple);
        outline: none !important;
    }
`