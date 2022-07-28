/// <reference types="Cypress" />

describe("homepage renders", () => {
    beforeEach(() => {
        cy.getProducts();
        cy.visit("/")
        cy.wait("@getProducts")
    });


    it("When click card image, go detail page and url include /detail/1", () => {
        cy.get(".home-page .card .card-go-detail")
            .first()
            .click()
        cy.url().should("include", "/detail/1")
    });

    it("When click card content , go detail page and url include /detail/1", () => {
        cy.get(".home-page .card .card-content")
            .first()
            .click()
        cy.url().should("include", "/detail/1")
    });

    it("When click card footer i, basket product count 1", () => {
        cy.get(".home-page .card .card-footer i")
            .first()
            .click()
        cy.get(".navbar .my-basket .my-basket-product-count")
            .should("have.text", "1")
    });

    it("When click card footer i more than one, basket product count 1", () => {
        cy.get(".home-page .card .card-footer i")
            .first()
            .click()
            .click()
        cy.get(".navbar .my-basket .my-basket-product-count")
            .should("have.text", "1")
    });

    it("Fake API datas", () => {
        cy.get(".home-page")
            .find(".card")
            .should("have.length", 3)
    });

    it.only("Fake API detail", () => {
        cy.getProductDetail();
        cy.get(".card").first().click();
        cy.wait("@getProductDetail");
        cy.get(".product-detail .product-detail-information-part h3")
            .should("have.text", "Mens Casual Premium Slim Fit T-Shirts")
    });
})