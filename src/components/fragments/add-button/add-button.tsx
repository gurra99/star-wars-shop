import React from "react";
import {Button, VariantColor, VariantSize} from "../button/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickAddToList?: (event: React.MouseEvent<HTMLElement>) => void;
    description: string;
};

export function AddButton(props: ButtonProps) {
    const {onClickAddToList, description} = props;

    return (
        <Button
            onClick={onClickAddToList}
            variantColor={VariantColor.Primary}
            variantSize={VariantSize.Medium}
            data-cy="add-button"
        >
            {description}
        </Button>
    );
};
