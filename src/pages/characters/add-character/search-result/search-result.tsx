import React from "react";
import {Container} from "./search-result.styles";
import {ICharacter} from "../../../../model/character";
import SearchedCharacterItem from "./SearchedCharacterItem/searched-character-item";

interface CharacterListProps {
    characters: ICharacter[],
}

const SearchResult = (props: CharacterListProps) => {
    const {characters} = props;

    return (
        <Container>
            {characters?.length > 0 && characters?.map((character: ICharacter, index: number) => {
                return (
                    <SearchedCharacterItem key={index} character={character}/>
                );
            })}
        </Container>
    );
};

export default SearchResult;