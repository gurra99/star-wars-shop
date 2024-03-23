import React, {useEffect, useState} from "react";
import {Container, LayoutButtonContainer} from "./movie-section.styles";
import {LoadingSpinner} from "../../../components/fragments/loading-spinner/loading-spinner";
import {getRandomNumber} from "../../../utilities/getRandomNumber";
import {IMovie} from "../../../model/movie";
import {Text} from "../../../App.styles";
import {ErrorMessage} from "../../../components/fragments/error-message/error-message";
import {GridLayoutButton} from "../../../components/fragments/grid-layout-button/grid-layout-button";
import {ListLayoutButton} from "../../../components/fragments/list-layout-button/list-layout-button";
import MovieGrid from "./movie-grid/movie-grid";
import MovieList from "./movie-list/movie-list";

const MovieSection = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [showMovieGrid, setShowMovieGrid] = useState<boolean>(true);
    const endpoint = process.env.REACT_APP_SERVICE_URI;

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(endpoint + "films/")
            .then((resp) => {
                if (!resp.ok) {
                    throw Error("Something went wrong!");
                }
                return resp.json();
            })
            .then((data) => {
                const transformedMovies = data.results.map((movie: IMovie) => {
                    return {
                        ...movie, price: getRandomNumber(100, 300),
                        discount: getRandomNumber(10, 70) > 50 ? getRandomNumber(30, 90) : 0
                    };
                });
                setMovies(transformedMovies);
                setIsLoading(false);
            }).catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
    }, []);


    return (
        <Container>
            {
                !isLoading &&
                movies?.length > 0 &&
                <LayoutButtonContainer>
                    <GridLayoutButton
                        onClickChangeState={() => setShowMovieGrid(true)}
                        disabled={showMovieGrid}
                    />
                    <ListLayoutButton
                        onClickChangeState={() => setShowMovieGrid(false)}
                        disabled={!showMovieGrid}
                    />
                </LayoutButtonContainer>
            }

            {
                !isLoading &&
                movies?.length > 0 &&
                showMovieGrid &&
                <MovieGrid movieList={movies}/>
            }

            {
                !isLoading &&
                movies?.length > 0 &&
                !showMovieGrid &&
                <MovieList movieList={movies}/>
            }

            {
                !isLoading &&
                movies?.length === 0 &&
                <Text align={"center"}>No products found.</Text>
            }

            {
                isLoading &&
                <LoadingSpinner/>
            }

            {
                !isLoading &&
                error &&
                <ErrorMessage text={error}/>
            }
        </Container>
    );
};

export default MovieSection;

