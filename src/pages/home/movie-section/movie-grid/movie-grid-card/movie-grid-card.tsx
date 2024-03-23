import React, {useContext, useEffect, useState} from "react";
import DataContext from "../../../../../context/data-context";
import {
    Container, CardTitle, Image, ContentContainer,
    PriceContainer, Price, DiscountText,
    CrosseOutImg, DiscountContainer, TabContainer
} from "./movie-grid-card.styles";
import {IMovie} from "../../../../../model/movie";
import {AddButton} from "../../../../../components/fragments/add-button/add-button";
import {TabButton} from "../../../../../components/fragments/tab-button/tab-button";
import {GreyButton} from "../../../../../components/fragments/grey-button/grey-button";
import MovieCardInformation from "./movie-card-information/movie-card-information";
import MovieCardPlot from "./movie-card-plot/movie-card-plot";
import {handleAddMovieToCart} from "../../../../../utilities/handleAddMovieToCart";

interface ProductCardProps {
    movie: IMovie,
}

export function MovieGridCard(props: ProductCardProps) {
    const [showPlot, setShowPlot] = useState<boolean>(false);
    const {cart, setCart, setTotalOrderPrice} = useContext(DataContext);
    const {movie} = props;
    const id = movie?.url?.match(/[0-9]+/g);

    useEffect(() => {
    }, [showPlot])

    return (
        <Container to={`movie/${id}`} data-cy="grid-card-link">
            <Image
                src={`/movie-card-images-800/${movie?.episode_id}.jpg`}
                srcSet={`/movie-card-images-600/${movie?.episode_id}.jpg 600w,
                    /movie-card-images-800/${movie?.episode_id}.jpg 800w,
                    /movie-card-images-1000/${movie?.episode_id}.jpg 972w`
                }
                alt="product-poster"
            />
            <ContentContainer>
                <CardTitle>{movie?.title}</CardTitle>
                <TabContainer>
                    <TabButton onClickAddToList={(event) => {
                        event.preventDefault();
                        setShowPlot(false);
                    }} active={!showPlot}
                    />
                    <GreyButton onClickAddToList={(event) => {
                        event.preventDefault();
                        setShowPlot(true);
                    }} active={showPlot}
                    />
                </TabContainer>

                {showPlot ?
                    <MovieCardPlot plot={movie.opening_crawl}/>
                    :
                    <MovieCardInformation
                        director={movie.director}
                        released={movie.release_date}
                        producer={movie.producer}/>
                }

                <PriceContainer>
                    <Price discount={movie?.discount ? movie?.discount : 0}>
                        {movie?.discount ? movie?.discount : movie?.price} :-
                    </Price>
                    {(movie.discount || 0) > 0 &&
                    <DiscountContainer>
                        <CrosseOutImg src={"/price-images/crossed-out-line.png"}/>
                        <DiscountText>{movie?.price}</DiscountText>
                    </DiscountContainer>
                    }
                </PriceContainer>
                <AddButton
                    description={"Add to cart"}
                    onClickAddToList={(event) => {
                        handleAddMovieToCart(event, movie, cart, setCart, setTotalOrderPrice)}
                    }
                />
            </ContentContainer>
        </Container>
    );
};

export default MovieGridCard;