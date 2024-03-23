import React from "react";
import {RowContainer, RowName, RowValue} from "../../../App.styles";
import {Container} from "./movie-description.styles";

interface ProductInformationProps extends React.InputHTMLAttributes<HTMLInputElement> {
    director?: string;
    released?: string;
};

const MovieDescription = (props: ProductInformationProps) => {
    return (
        <Container>
            <RowContainer>
                <RowName>Director:</RowName>
                <RowValue>{props.director}</RowValue>
            </RowContainer>
            <RowContainer>
                <RowName>Release date:</RowName>
                <RowValue>{props.released}</RowValue>
            </RowContainer>
        </Container>
    );
};

export default MovieDescription;