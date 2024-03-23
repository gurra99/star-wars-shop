import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGrip} from "@fortawesome/free-solid-svg-icons";
import {Button, VariantColor, VariantShape, VariantSize} from "../button/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickChangeState?: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
};

export function GridLayoutButton(props: ButtonProps) {
    const {onClickChangeState, disabled = false} = props;

    return (
        <Button
            onClick={onClickChangeState}
            variantColor={VariantColor.Primary}
            variantSize={VariantSize.Medium}
            variantShape={VariantShape.Rectangle}
            style={{paddingTop: "0.25rem"}}
            className={`${disabled ? "disabled-button" : ""}`}
        >
            <FontAwesomeIcon icon={faGrip}/>
        </Button>
    );
};
