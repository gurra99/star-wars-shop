import React from "react";
import {Container} from "./movie-grid.styles";
import {IMovie} from "../../../../model/movie";
import MovieGridCard from "./movie-grid-card/movie-grid-card";

interface MovieListProps {
    movieList: IMovie[],
}

const MovieGrid = (props: MovieListProps) => {

    return (
        <Container>
            {
                props.movieList?.map((movie: IMovie, index: number) => {
                    return (
                        <MovieGridCard key={index} movie={movie}/>
                    );
                })
            }
        </Container>
    );
};

export default MovieGrid;