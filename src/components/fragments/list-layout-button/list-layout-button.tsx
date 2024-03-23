import React from "react";
import {faList} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, VariantColor, VariantShape, VariantSize} from "../button/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickChangeState?: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
};

export function ListLayoutButton(props: ButtonProps) {
    const {onClickChangeState, disabled = false} = props;

    return (
        <Button
            onClick={onClickChangeState}
            variantColor={VariantColor.Primary}
            variantSize={VariantSize.Medium}
            variantShape={VariantShape.Rectangle}
            style={{paddingTop: "0.25rem"}}
            className={`${disabled ? "disabled-button" : ""}`}
            aria-label={"list-label"}
        >
            <FontAwesomeIcon icon={faList}/>
        </Button>
    );
};
