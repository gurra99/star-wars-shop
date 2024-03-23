describe("test links", () => {
    it("click on logo link and be redirected to home page", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="logo-link"]').click();
        cy.location("pathname").should("eq", "/")
    })

    it("click on home redirects you to home page", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="home-link"]').click();
        cy.location("pathname").should("eq", "/")
    })

    it("click on characters link redirects you to characters page", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="characters-link"]').click();
        cy.location("pathname").should("eq", "/characters")
    })

    it("click on characters link redirects you to characters page", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="cart-link"]').click();
        cy.location("pathname").should("eq", "/cart")
    })
});