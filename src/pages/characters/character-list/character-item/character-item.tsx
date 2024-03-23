import React from "react";

import {RowContainer, RowName, RowValue} from "../../../../App.styles";
import {CardContainer, TextContainer, CardHeader} from "./character-item.styles";
import {Image} from "../../../home/movie-section/movie-list/movie-list-card/movie-list-card.styles";
import {ICharacter} from "../../../../model/character";

interface CharacterItemProps {
    character: ICharacter,
}

const CharacterItem = (props: CharacterItemProps) => {
    const {character} = props;
    const id = character.url?.match(/[0-9]+/g) || 0;

    return (
        <CardContainer>
            <Image
                src={id <= 27 ? `/characters/${id}.jpg` : "/characters/no-image/no-image-big.jpg"}
                alt="character"
            />
            <TextContainer>
                <CardHeader data-cy="character-name">{character?.name}</CardHeader>
                <RowContainer>
                    <RowName>Birth:</RowName>
                    <RowValue>{character?.birth_year}</RowValue>
                </RowContainer>
            </TextContainer>
        </CardContainer>
    );
};


export default CharacterItem;