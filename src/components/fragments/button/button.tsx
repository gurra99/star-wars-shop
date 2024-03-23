/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {Root} from "./button.styles";

export enum VariantColor {
    Primary,
    Secondary,
    Negative,
};

export enum VariantSize {
    Small,
    Medium,
    Negative
};

export enum VariantShape {
    Circle,
    Rectangle,
};

function getBackgroundColor(variant: VariantColor) {
    switch (variant) {
        case VariantColor.Negative:
            return "var(--color-dark-blue)";
        case VariantColor.Secondary:
            return "var(--color-discount)";
        case VariantColor.Primary:
        default:
            return "var(--color-dark-blue)";
    }
};

function getSize(variant: VariantSize) {
    switch (variant) {
        case VariantSize.Negative:
            return "0.37rem 1.68rem";
        case VariantSize.Small:
            return "0rem 0.75rem";
        case VariantSize.Medium:
        default:
            return "0.06rem 1.25rem";
    }
};

function getShape(variant: VariantShape) {
    switch (variant) {
        case VariantShape.Circle:
            return "1.37rem";
        case VariantShape.Rectangle:
            return "unset";
        default:
            return "1.37rem";
    }
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variantColor?: VariantColor;
    variantSize?: VariantSize;
    variantShape?: VariantShape;
    fillParent?: boolean;

};

export function Button(props: ButtonProps) {
    const {
        variantColor = VariantColor.Primary,
        variantSize = VariantSize.Small,
        variantShape = VariantShape.Circle,
        children,
        fillParent = false,
        ...rest
    } = props;
    return (
        <Root
            {...rest}
            backgroundColor={getBackgroundColor(variantColor)}
            size={getSize(variantSize)}
            borderRadius={getShape(variantShape)}
            fillParent={fillParent}
        >
            {children}
        </Root>
    );
};