import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.h1`
    width: 100%;
    text-align: center;
    letter-spacing: 0.05rem;
    word-spacing: 0.2rem;
    margin-bottom: 3%;
    margin-top: max(3%, 1.875rem);
`

export const TotalPrice = styled.p`
    text-align: center;
    width: 50%;
    padding: 1.25rem;
    background-color: var(--color-light-grey);
    border: 1px solid var(--color-grey);
    margin-block: 2rem;
`

