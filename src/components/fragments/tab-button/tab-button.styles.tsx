import styled from "styled-components";

export const Root = styled.button<{ active: boolean }>`
    text-align: center;
    width: 5rem;
    font-size: var(--fs-200);
    line-height: 1;
    letter-spacing: normal;
    padding: 0.25rem 0.5rem;
    border-top-left-radius: 12.5px;
    border-top-right-radius: none;
    border-bottom-left-radius: 12.5px;
    border-bottom-right-radius: none;
    color:  ${({active}) => active ? "#787b85" : "var(--color-dark-blue)"};};
    background-color: ${({active}) => active ? "#e6e7ea" : "#caddf2"};}
    border: 1px solid rgba(0, 0, 0, 0.07);
    cursor: pointer;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: ${({active}) => active ? "default" : "pointer"};}
    
    @keyframes anim-shadow {
        100% {
            box-shadow: 0px 0px 20px 5px rgba(18, 18, 34, 0);
        }
    }
`;

