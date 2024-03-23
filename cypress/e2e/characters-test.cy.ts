describe("characters page tests", () => {
    it("correct url", () => {
        cy.visit("http://localhost:3000/characters");
    })

    it("header contains correct text", () => {
        cy.visit("http://localhost:3000/characters");
        cy.get('[data-cy="characters-header"]').contains("Characters");
    });

    it("search for a character", () => {
        cy.visit("http://localhost:3000/characters");
        cy.get('[data-cy="search-input"]').type("Boba")
        cy.get("p").contains("Boba Fett");
    });

    it("add character to favourite characters", () => {
        cy.visit("http://localhost:3000/characters");
        cy.get('[data-cy="search-input"]').type("Boba")
        cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="character-name"]').contains("Boba Fett");
    });
});