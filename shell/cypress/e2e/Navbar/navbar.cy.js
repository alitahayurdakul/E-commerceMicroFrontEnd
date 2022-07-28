/// <reference types="Cypress" />

describe("navbar renders", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("navbar brand content is Commerce", () => {
        cy.get(".navbar-brand").should("have.text", "Commerce")
    });

    it("when click brand, url is /", () => {
        cy.get(".navbar-brand")
            .click()
        cy.url().should("include", "/")
    });

    it("input placeholder value is right?", () => {
        cy.get(".navbar-content-body input")
            .should("have.attr", "placeholder", "Lütfen girmek istediğiniz kelimeyi yazınız.")
    });

    it("when click search button, url contains input's value ", () => {
        cy.get(".navbar-content-body input")
            .type("men")
        cy.get(".navbar-content-body button")
            .click()
        cy.url().should("include", "/products/q=men")
        cy.get(".search-products")
            .find(".card")
            .should("have.length", "11")
    });

    it("when click market icon go my basket url", () => {
        cy.get(".navbar .my-basket .my-basket-product-count")
            .click()
        cy.url().should("include", "/my-bag")
    });

    it("when search value is men, result length is 2?", () => {
        cy.getProducts();
        cy.visit("/products/q=men")
        cy.wait("@getProducts")
        cy.get(".search-products")
            .find(".card")
            .should("have.length", "2")
    });

    it.only("when search value, any products are not found, result?", () => {
        cy.getProducts();
        cy.visit("/products/q=asd")
        cy.wait("@getProducts")
        cy.get(".search-not-products")
        .should("have.text","Böyle bir ürün bulunamadı...")
    });
})