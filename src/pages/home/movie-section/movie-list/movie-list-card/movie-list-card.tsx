import React, {useContext} from "react";
import {
    Container,
    Image,
    ImageContainer,
    InformationContainer,
    MovieCardPlot,
    PlotContainer,
    ButtonContainer, PlotName, PlotValue,
} from "./movie-list-card.styles";
import {RowContainer, RowName, RowValue} from "../../../../../App.styles";
import DataContext from "../../../../../context/data-context";
import {IMovie} from "../../../../../model/movie";
import {AddButton} from "../../../../../components/fragments/add-button/add-button";
import {handleAddMovieToCart} from "../../../../../utilities/handleAddMovieToCart";

interface MovieListCardProps {
    movie: IMovie,
}

const MovieListCard = (props: MovieListCardProps) => {
    const {cart, setCart, setTotalOrderPrice} = useContext(DataContext);
    const {movie} = props;

    return (
        <Container>
            <ImageContainer>
                <Image
                    src={`/movie-card-images-1000/${movie?.episode_id}.jpg`}
                    alt="product-poster"/>
            </ImageContainer>
            <InformationContainer>
                <RowContainer>
                    <RowName>Title</RowName>
                    <RowValue>{movie.title}</RowValue>
                </RowContainer>
                <RowContainer>
                    <RowName>Producer</RowName>
                    <RowValue>{movie.producer}</RowValue>
                </RowContainer>
                <RowContainer>
                    <RowName>Director</RowName>
                    <RowValue>{movie.director}</RowValue>
                </RowContainer>
                <RowContainer>
                    <RowName>Release Date</RowName>
                    <RowValue>{movie.release_date}</RowValue>
                </RowContainer>
                <RowContainer>
                    <RowName>Movie Characters</RowName>
                    <RowValue>{movie.characters?.length}</RowValue>
                </RowContainer>
                <ButtonContainer>
                    <AddButton
                        description={"Add to cart"}
                        onClickAddToList={(event) => {
                            handleAddMovieToCart(event, movie, cart, setCart, setTotalOrderPrice)}
                        }
                    />
                </ButtonContainer>
            </InformationContainer>
            <PlotContainer>
                <MovieCardPlot>
                    <PlotName>Plot:</PlotName>
                    <PlotValue> {movie.opening_crawl}</PlotValue>
                </MovieCardPlot>
            </PlotContainer>
        </Container>
    );
};

export default MovieListCard;