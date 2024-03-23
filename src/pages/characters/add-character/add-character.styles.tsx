import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    & > input:nth-child(4){
        margin-bottom: 1.56rem;
    }
`

export const Header = styled.h1`
    margin-bottom: 1rem;
`