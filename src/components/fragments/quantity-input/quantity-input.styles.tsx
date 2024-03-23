import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    caret-color: transparent;
`

export const MinusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-site-background);
    border: 1px solid var(--color-grey);    
    height: 25px;
    width: 25px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    margin-right: 0.31rem;
    
    &:hover {
       border: 2px solid var(--color-dark-blue);   
       font-size: var(--fs-400);   
    }
`

export const InputField = styled.input`
    border: none;
    border-bottom: 1px solid var(--color-grey);
    width: 1.25rem;
    text-align: center; 
    background-color: var(--color-site-background);   
    
    &:focus-visible {
        border-bottom: 2.5px solid var(--color-dark-blue);
        font-size: var(--fs-300);    
        outline: none;
    }  
`

export const PlusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-site-background);
    border:1px solid var(--color-grey);    
    height: 1.56rem;
    width: 1.56rem;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    margin-left: 0.31rem;
    
    &:hover {
       display: flex;
       justify-content: center;
       align-items: center;
       border: 2px solid var(--color-dark-blue);   
       font-size: var(--fs-400);   
    }
`


