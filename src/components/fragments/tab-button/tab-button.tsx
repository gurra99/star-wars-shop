import React from "react";
import {Root} from "./tab-button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickAddToList?: (event: React.MouseEvent<HTMLElement>) => void;
    active: boolean;
};

export function TabButton(props: ButtonProps) {
    const {onClickAddToList, active} = props;

    return (
        <Root onClick={onClickAddToList} active={active} data-cy="tab-button">
            Info
        </Root>
    );
};
