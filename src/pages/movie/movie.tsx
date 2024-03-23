import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {
    DescriptionContainer,
    DescriptionName,
    DescriptionValue,
    Header,
    Container,
    MovieContainer,
    TextContainer,
    Image,
} from "./movie.styles";
import {RowContainer, RowName, RowValue, ButtonContainer} from "../../App.styles";
import DataContext from "../../context/data-context";
import {dimensionsNumber} from "../../utilities/dimensions";
import {IMovie} from "../../model/movie";
import {toast} from "react-toastify";
import {LoadingSpinner} from "../../components/fragments/loading-spinner/loading-spinner";
import {ErrorMessage} from "../../components/fragments/error-message/error-message";
import {AddButton} from "../../components/fragments/add-button/add-button";
import {useWindowWide} from "../../components/hooks/use-window-width";
import {getRandomNumber} from "../../utilities/getRandomNumber";
import {handleAddMovieToCart} from "../../utilities/handleAddMovieToCart";

const Movie = () => {
    const [movie, setMovie] = useState<IMovie>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const {characterList, setCharacterList, cart, setCart, setTotalOrderPrice} = useContext(DataContext);
    const {id} = useParams();
    const windowWidth = useWindowWide();
    const endpoint = process.env.REACT_APP_SERVICE_URI;

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(endpoint + `films/${id}/`)
            .then((resp) => {
                if (!resp.ok) {
                    throw Error("Something went wrong!");
                }
                return resp.json();
            })
            .then((data) => {
                setMovie({
                    ...data, price: getRandomNumber(100, 300),
                    discount: getRandomNumber(10, 90) > 50 ? getRandomNumber(10, 90) : 0
                });
                setIsLoading(false);
            }).catch(error => {
            setError(error.message);
            setIsLoading(false);
            console.log(error);
        });
    }, []);

    const getUnAddedCharacters = () => {
        return movie?.characters?.filter(x => !characterList.some(y => y === x));
    };

    const addCharactersToFavouriteCharacters = () => {
        setCharacterList((previous: string[]) => [...previous, ...getUnAddedCharacters() || []])
        toast.success("Added all characters to favourite characters ")
    };

    return (
        <Container>
            {!isLoading ? (
                <MovieContainer>
                    <Image
                        src={`/movie-card-images/${movie?.episode_id}.jpg`} alt="movie"
                        srcSet={`/movie-card-images-600/${movie?.episode_id}.jpg 600w,
                        /movie-card-images-800/${movie?.episode_id}.jpg 800w,
                        /movie-card-images-1000/${movie?.episode_id}.jpg 972w`
                        }
                    />
                    <TextContainer>
                        <Header className="secondary-heading">{movie?.title}</Header>
                        <RowContainer>
                            <RowName>Episode number:</RowName>
                            <RowValue>{movie?.episode_id}</RowValue>
                        </RowContainer>
                        <RowContainer>
                            <RowName>Release year:</RowName>
                            <RowValue>
                                {new Date(movie?.release_date || "").toLocaleDateString(["sv-SE"], {
                                    year: "numeric",
                                })}
                            </RowValue>
                        </RowContainer>
                        <DescriptionContainer>
                            <DescriptionName>
                                Description:
                            </DescriptionName>
                            <DescriptionValue>
                                {movie?.opening_crawl}
                            </DescriptionValue>
                        </DescriptionContainer>
                        <ButtonContainer>
                            <AddButton
                                description={"Add to cart"}
                                onClickAddToList={(event) => {
                                    handleAddMovieToCart(event, movie, cart, setCart, setTotalOrderPrice)}
                                }
                            />
                            <AddButton
                                description={windowWidth < dimensionsNumber.tablets ? "Add characters" :
                                    "Add characters to favourites"}
                                onClickAddToList={addCharactersToFavouriteCharacters}
                            />
                        </ButtonContainer>
                    </TextContainer>
                </MovieContainer>
            ) : <LoadingSpinner/>
            }
            {!isLoading && error &&
            <ErrorMessage text={error}/>
            }
        </Container>
    );
};

export default Movie;