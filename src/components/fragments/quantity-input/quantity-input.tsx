import React, {useState} from "react";
import {Container, MinusButton, InputField, PlusButton} from "./quantity-input.styles";

interface QuantityInputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleQuantityChange: (value: number) => void;
    quantity: number;
};

const QuantityInput = (props: QuantityInputProps) => {
    const {handleQuantityChange, quantity} = props;
    const [quantityInputValue, seQuantityInputValue] = useState<number>(quantity);

    return (
        <Container>
            <MinusButton onClick={() => {
                if (quantityInputValue > 1) {
                    handleQuantityChange(quantityInputValue - 1);
                    seQuantityInputValue((previous: number) => previous - 1);
                }
            }}
            >-</MinusButton>
            <InputField
                value={quantity || 1}
                placeholder={"1"}
                type={"text"}
                onChange={(event) => {
                    if (Number(event.target.value) > 0) {
                        seQuantityInputValue(Number(event.target.value))
                    }
                }}
            />
            <PlusButton onClick={() => {
                if (quantityInputValue >= 1) {
                    handleQuantityChange(quantityInputValue + 1);
                    seQuantityInputValue((previous: number) => previous + 1);
                }
            }}>+</PlusButton>
        </Container>
    );
};

export default QuantityInput;