import React, {useContext} from "react";
import DataContext from "../../../../../context/data-context";
import {Container, Name, Image} from "./searched-character-item.styles";
import {toast} from "react-toastify";
import {AddButton} from "../../../../../components/fragments/add-button/add-button";
import {ICharacter} from "../../../../../model/character";

interface CharacterListProps {
    character: ICharacter,
}

const SearchedCharacterItem = (props: CharacterListProps) => {
    const {characterList, setCharacterList} = useContext(DataContext);
    const {character} = props;
    const id = character.url?.match(/[0-9]+/g) || 0;

    const handleAddToList = () => {
        if (!characterList.includes(character?.url)) {
            characterList.push(character?.url);
            const newCharacterList = characterList.slice()
            setCharacterList(() => newCharacterList);
            toast.success("Added character")
        } else {
            toast.error("This character is already in your list")
        }
    };

    return (
        <Container>
            <Image
                src={id <= 27 ? `/characters/${id}.jpg` : "/characters/no-image/no-image-big.jpg"}
                alt="character"
            />
            <Name>{character?.name}</Name>
            <AddButton description={"Add"} onClickAddToList={handleAddToList}/>
        </Container>
    );
};

export default SearchedCharacterItem;