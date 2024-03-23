import React from "react";
import {Container} from "./movie-card-information.styles";
import {RowContainer, RowName, RowValue} from "../../../../../../App.styles";

interface ProductInformationProps {
    producer?: string;
    director?: string;
    released?: string;
};

const MovieCardInformation = (props: ProductInformationProps) => {
    const {producer, director, released} = props;

    return (
        <Container>
            <RowContainer>
                <RowName fontSize="0.83rem">Director:</RowName>
                <RowValue fontSize="0.83rem">{director}</RowValue>
            </RowContainer>
            <RowContainer>
                <RowName fontSize="0.83rem">Producer:</RowName>
                <RowValue fontSize="0.83rem">{producer?.split(",", 1)[0] || ""}</RowValue>
            </RowContainer>
            <RowContainer>
                <RowName fontSize="0.83rem">Release date:</RowName>
                <RowValue fontSize="0.83rem">{released}</RowValue>
            </RowContainer>
        </Container>
    );
};

export default MovieCardInformation;
;