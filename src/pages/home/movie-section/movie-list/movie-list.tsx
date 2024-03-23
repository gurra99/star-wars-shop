import React from "react";
import {Container} from "./movie-list.styles";
import {IMovie} from "../../../../model/movie";
import MovieListCard from "./movie-list-card/movie-list-card";

interface MovieListProps {
    movieList: IMovie[],
}

const MovieList = (props: MovieListProps) => {
    return (
        <Container>
            {
                props.movieList?.map((movie: IMovie, index: number) => {
                    return (
                        <MovieListCard key={index} movie={movie}/>
                    );
                })
            }
        </Container>
    );
};

export default MovieList;