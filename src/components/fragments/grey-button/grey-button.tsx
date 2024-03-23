import React from "react";
import {Root} from "./grey-button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickAddToList: (event: React.MouseEvent<HTMLElement>) => void;
    active: boolean;
};

export function GreyButton(props: ButtonProps) {
    const {onClickAddToList} = props;

    return (
        <Root onClick={onClickAddToList} active={props.active} data-cy="grey-button">
            Plot
        </Root>
    );
};
