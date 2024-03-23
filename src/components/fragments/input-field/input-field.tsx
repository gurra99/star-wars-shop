import React, {ChangeEvent} from "react";
import {Container} from "./input-field.styles";

interface InputFieldProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

const InputField = (props: InputFieldProps) => {

    return (
        <Container
            name="name"
            aria-label="name"
            id="name"
            data-cy="search-input"
            value={props.value}
            type={"text"}
            onChange={props.onChangeHandler}
        >
        </Container>
    );
};

export default InputField;