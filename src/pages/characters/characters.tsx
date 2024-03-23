import React from "react";
import {CharacterListContainer, Container, Line} from "./characters.styles";
import AddCharacter from "./add-character/add-character";
import CharacterList from "./character-list/character-list";

const Characters = () => {
    return (
        <Container>
            <AddCharacter/>
            <Line/>
            <CharacterListContainer>
                <CharacterList/>
            </CharacterListContainer>
        </Container>
    );
};

export default Characters;