import React, {useEffect, useState} from "react";
import {Container, Label, LoadingSpinnerContainer} from "../characters.styles";
import {Form, Header} from "./add-character.styles";
import {useDebounce} from "../../../components/hooks/use-debounce";
import {LoadingSpinner} from "../../../components/fragments/loading-spinner/loading-spinner";
import {ErrorMessage} from "../../../components/fragments/error-message/error-message";
import InputField from "../../../components/fragments/input-field/input-field";
import SearchResult from "./search-result/search-result";
import {ICharacter} from "../../../model/character";

const AddCharacter = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchList, setSearchList] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const debouncedValueDimension = useDebounce(searchValue);
    const endpoint = process.env.REACT_APP_SERVICE_URI;

    useEffect(() => {
        let isCancelled = false;

        if (searchValue) {
            setIsLoading(true);
            setError(null);
        }

        if (isValidSearchValue()) {
            fetch(endpoint + `people/?search=${debouncedValueDimension}`)
                .then((resp) => {
                    if (!resp.ok) {
                        throw Error("Something went wrong!");
                    }
                    return resp.json();
                })
                .then((data) => {
                    if (!isCancelled) {
                        setSearchList(data.results);
                        setIsLoading(false);
                    }
                }).catch(error => {
                setError(error.message);
                setIsLoading(false);
                console.log(error);
            });
            return () => {
                isCancelled = true;
            }
        }
    }, [debouncedValueDimension, searchValue]);

    const isValidSearchValue = () => {
        return debouncedValueDimension && `${endpoint} + people/?search=${debouncedValueDimension}`.length > 37;
    };

    return (
        <Container>
            <Header className="secondary-heading">Add Characters</Header>
            <Form>
                <Label>Search</Label>
                <InputField
                    value={searchValue}
                    onChangeHandler={(event) => {
                        setSearchValue(event.target.value)
                    }}
                />
            </Form>

            {isLoading && searchValue &&
            <LoadingSpinnerContainer>
                <LoadingSpinner/>
            </LoadingSpinnerContainer>
            }

            {!isLoading &&
            <SearchResult characters={searchList}/>
            }

            {!isLoading &&
            error &&
            <ErrorMessage text={error}/>
            }
        </Container>
    );
};

export default AddCharacter;