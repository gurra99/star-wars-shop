import React, {useContext, useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Text} from "../../../App.styles";
import {CharacterListContainer, Header, LoadingCharacters, TheresNoMoreCharacters} from "./character-list.styles";
import DataContext from "../../../context/data-context";
import {ICharacter} from "../../../model/character";
import CharacterItem from "./character-item/character-item";
import {ErrorMessage} from "../../../components/fragments/error-message/error-message";

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const {characterList} = useContext(DataContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [characterListPosition, setCharacterListPosition] = useState<number>(0);
    const [hasMoreCharacters, setHasMoreCharacters] = useState<boolean>(true);

    const fetchCharacters = () => {
        if (noMoreCharactersToLoad()) {
            setHasMoreCharacters(false)
            setCharacterListPosition(characterList.length)
            return;
        };

        let isCancelled = false;
        setIsLoading(true);
        setError(null);

        getNextCharacters().forEach((url: string) => {
            fetch(url)
                .then((resp) => {
                    if (!resp.ok) {
                        throw Error("Something went wrong!");
                    }
                    return resp.json();
                })
                .then((data) => {
                    if (!isCancelled) {
                        if (!foundCharacter(data)) {
                            setCharacters((previous: ICharacter[]) => {
                                return [...previous, data]
                            })
                        }
                    }
                    setIsLoading(false);
                }).catch(error => {
                setError(error.message);
                setIsLoading(false);
                console.log(error);
            });
        });
        increaseCharacterListPosition();
        return () => {
            isCancelled = true;
        }
    }

    useEffect(() => {
        fetchCharacters();
    }, [characterList]);

    const noMoreCharactersToLoad = () => {
        return characterListPosition >= characterList.length;
    };

    const foundCharacter = (character: ICharacter) => {
        return characters.some(item => item.url === character.url);
    };

    const getNextCharacters = () => {
        return characterList.slice(characterListPosition, characterListPosition + 6);
    };

    const increaseCharacterListPosition = () => {
        if (characterList.length > 5)
            setCharacterListPosition(previous => {
                return previous + 5;
            });
    };

    return (
        <InfiniteScroll
            dataLength={characters.length}
            next={fetchCharacters}
            hasMore={hasMoreCharacters}
            loader={<LoadingCharacters>Loading...</LoadingCharacters>}
            scrollableTarget="scrollableDiv"
            endMessage={(characters.length > 6) &&
            <TheresNoMoreCharacters>
                Theres no more characters
            </TheresNoMoreCharacters>
            }
        >
            <CharacterListContainer>
                <Header className="secondary-heading" data-cy="characters-header">Characters</Header>
                {characters?.map((character: ICharacter, index: number) => {
                    return (
                        <CharacterItem key={index} character={character}/>
                    );
                })}

                {!isLoading && characters.length === 0 &&
                <Text align={"center"} fontSize={"1.1rem"}>You have no favourite characters.</Text>
                }

                {!isLoading && error &&
                <ErrorMessage text={error}/>
                }
            </CharacterListContainer>
        </InfiniteScroll>
    );
};

export default CharacterList;