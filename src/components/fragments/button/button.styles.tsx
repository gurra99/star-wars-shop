import styled from "styled-components";

export const Root = styled.button<{ backgroundColor: string; size: string; borderRadius: string; fillParent: boolean }>`
    font-family: 'Roboto';
    padding: ${({size}) => size};}
    cursor: pointer;
    background-color: ${({backgroundColor}) => backgroundColor};}
    border-radius: 1.37rem;
    border-radius: ${({borderRadius}) => borderRadius};}
    border: none;
    color: white;  
    font-size: var(--fs-400);
    font-weight: var(--fs-800);
    border: 2.5px solid ${({backgroundColor}) => backgroundColor};}
     ${({fillParent}) => fillParent && "flex: 1 1;"}
    caret-color: transparent;
    
    @media (min-width: 480px) {
        font-size: 18px;
    }
    
    &:hover {
        background-color: white;
        color: ${({backgroundColor}) => backgroundColor};}
        border: 2.5px solid ${({backgroundColor}) => backgroundColor};}
    }
    
    &:focus {
        box-shadow: 0px 0px 0px 1px rgba(18, 18, 34, 1);
        animation: anim-shadow .3s forwards;
    }
    
    @keyframes anim-shadow {
         100% {
             box-shadow: 0px 0px 20px 5px rgba(18, 18, 34, 0);
         }
    }
`;
