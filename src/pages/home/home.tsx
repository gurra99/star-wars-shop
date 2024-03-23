import React from "react";
import {Container, Header} from "./home.styles";
import MovieSection from "./movie-section/movie-section";

const Home = () => {
    return (
        <Container>
            <Header className="primary-heading">Star Wars Movie Shop</Header>
            <MovieSection/>
        </Container>
    );
};

export default Home;