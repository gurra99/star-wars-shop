import React from "react";
import user from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";
import {DataProvider} from "../context/data-context";
import {BrowserRouter} from "react-router-dom";
import {getMockMovie, getMockMovies} from "../utilities/test-utilities/mock-data/movie-mock";
import {createServer} from "../utilities/test-utilities/server";
import Home from "../pages/home/home";
import MovieGridCard from "../pages/home/movie-section/movie-grid/movie-grid-card/movie-grid-card";

createServer([{
    path: "https://swapi.dev/api/films",
    res: () => {
        return {
            results: getMockMovies()
        }
    }
}])

test("h1 should be in home page", () => {
    render(<Home/>);
    const headerElement = screen.getByRole("heading", {level: 1});
    expect(headerElement).toBeInTheDocument();
});

test("correct text in product list header", () => {
    render(<Home/>);
    const headerElementText = screen.getByText(/Star Wars Movie Shop/i);
    expect(headerElementText).toBeInTheDocument();
});

test("movie items is rendered", async () => {
    render(
        <DataProvider>
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </DataProvider>
    );

    const text = await screen.findByText(/A New Hope/i);
    expect(text).toBeInTheDocument();
});

test("does grid-card have the right href value", async () => {
    render(
        <DataProvider>
            <BrowserRouter>
                <MovieGridCard movie={getMockMovie()}/>
            </BrowserRouter>
        </DataProvider>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/movie/${getMockMovie().episode_id}`);

});

test("when you click link on movie-card will you be sent to the correct page", async () => {
    render(
        <DataProvider>
            <BrowserRouter>
                <MovieGridCard movie={getMockMovie()}/>
            </BrowserRouter>
        </DataProvider>
    );

    const link = screen.getByRole("link");
    await user.click(link);

    screen.logTestingPlaygroundURL()
    expect(global.window.location.pathname).toContain("/movie/6");
});

test("when you click on list view button, it should show movie list component", async () => {
    render(
        <DataProvider>
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </DataProvider>
    );

    const button = await screen.findByRole("button", {
        name: /list-label/i
    })

    await user.click(button);
    const name = screen.getAllByText(/Movie Characters/i);
    expect(name.length).toBeGreaterThan(0);
});


