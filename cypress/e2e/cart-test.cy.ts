describe("cart tests", () => {
    it("correct url", () => {
        cy.visit("http://localhost:3000/cart");
    })

    it("header contains correct text", () => {
        cy.visit("http://localhost:3000/cart");
        cy.get("h1").contains("Cart");
    });

    it("check if add to cart functionality works", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="add-button"]').first().click();
        cy.get('[data-cy="cart-link"]').click();
        cy.get('[data-cy="product-name"]').contains("Product name:");
    });

    it("check if you could remove a item from cart", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="add-button"]').first().click();
        cy.get('[data-cy="cart-link"]').click();
        cy.get('[data-cy="remove-btn"]').click();
        cy.get("p").contains("Your cart is empty");
    });
});
