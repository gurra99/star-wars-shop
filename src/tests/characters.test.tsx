import React from "react";
import user from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";
import {DataProvider} from "../context/data-context";
import {createServer} from "../utilities/test-utilities/server";
import {getMockSearchCharacter} from "../utilities/test-utilities/mock-data/search-mock";
import {BrowserRouter} from "react-router-dom";
import AddCharacter from "../pages/characters/add-character/add-character";
import Characters from "../pages/characters/characters";

createServer([{
    path: "https://swapi.dev/api/people",
    res: () => {
        return {
            results: getMockSearchCharacter()
        }
    }
}])
const timeout = () => new Promise(resolve => setTimeout(resolve, 2000));

test("input field should be in the component", () => {
    render(<AddCharacter/>);

    const nameInput = screen.getByRole("textbox", {
        name: /name/i
    })
    expect(nameInput).toBeInTheDocument();
});

test("search for a character", async () => {
    render(
        <DataProvider>
            <BrowserRouter>
                <AddCharacter/>
            </BrowserRouter>
        </DataProvider>
    )

    const nameInput = await screen.findByRole("textbox", {
        name: /name/i
    })

    await user.click(nameInput);
    await user.keyboard("Boba");
    await timeout(); // Because of DebouncedValue

    const name = await screen.findAllByText(/Fett/i);
    expect(name.length).toBeGreaterThan(0);
}, 7000);

test("h1 should be in home page", () => {
    render(<AddCharacter/>)
    const headerElement = screen.getByRole("heading", {level: 1});
    expect(headerElement).toBeInTheDocument();
});

test("Correct text in product list header", () => {
    render(<AddCharacter/>);
    const headerElementText = screen.getByText(/Add Characters/i);
    expect(headerElementText).toBeInTheDocument();
});

test("Check if there is a label with the name Search", () => {
    render(<AddCharacter/>);
    const label = screen.getByText(/Search/i)
    expect(label).toBeInTheDocument();
});


test("search for a character and add it to favourite characters", async () => {
    render(
        <DataProvider>
            <BrowserRouter>
                <Characters/>
            </BrowserRouter>
        </DataProvider>
    )

    const nameInput = await screen.findByRole("textbox", {
        name: /name/i
    })

    await user.click(nameInput);
    await user.keyboard("Boba");
    await timeout(); // Because of DebouncedValue

    const button = await screen.findByRole("button", {
        name: /Add/i
    })

    await user.click(button);

    const birth = await screen.findAllByText(/Birth/i);
    expect(birth.length).toBeGreaterThan(0);
}, 7000);