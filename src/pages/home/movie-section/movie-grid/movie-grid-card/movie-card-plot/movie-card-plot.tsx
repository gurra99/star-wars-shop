import React from "react";
import {TextContainer} from "./movie-card-plot.styles";
import {Text} from "../../../../../../App.styles";

interface MovieCardPlotProps {
    plot?: string;
};

const MovieCardPlot = (props: MovieCardPlotProps) => {
    const {plot} = props;

    return (
        <TextContainer data-cy="product-details">
            {plot && <Text fontSize={"0.75rem"}> {plot} </Text>}
        </TextContainer>
    );
};

export default MovieCardPlot;