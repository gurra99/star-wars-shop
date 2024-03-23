describe("home page tests", () => {
    it("correct url", () => {
        cy.visit("http://localhost:3000/");
    })

    it("header contains correct text", () => {
        cy.visit("http://localhost:3000/");
        cy.get("h1").contains("Star Wars Movie Shop");
    });

    it("click on a movie card takes you to movie page", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="grid-card-link"]').first().click();
        cy.location("pathname").should("eq", "/movie/1")
    });

    it("click on plot button on movie card shows plot information", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="grey-button"]', {timeout: 8000}).eq(0).click();
        cy.get('[data-cy="product-details"]');
    });
});