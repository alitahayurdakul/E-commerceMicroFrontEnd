/// <reference types="Cypress" />

describe("my basket page is render", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("when click add product, products is visible?", () => {
        cy.get(".card .card-footer i").first().click();
        cy.visit("/my-bag");
        cy.get(".order-list .order-list-card p")
            .contains("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    });

    it("when click increase, payment summary is increase?", () => {
        cy.get(".card .card-footer i").first().click();
        cy.visit("/my-bag");
        cy.get(".order-list .order-list-card .order-list-card-end")
            .contains("+")
            .click()
            .click()
    });

    it("when click decrease, Card is empty is not exist?", () => {
        cy.get(".card .card-footer i").first().click();
        cy.visit("/my-bag");
        cy.get(".order-list .order-list-card .order-list-card-end")
            .contains("-")
            .click()
        cy.get(".order-list .order-list-card")
            .should("not.exist")

        cy.get(".payment-summary")
            .should("not.exist")

        cy.get(".bag-part div")
            .contains("Card is empty")
    });

    it.only("when click delete, Card, payment is not exist", () => {
        cy.get(".card .card-footer i").first()
            .click()
            .click()
        cy.visit("/my-bag");
        cy.get(".order-list .order-list-card .order-list-card-end .delete-item")
            .click()

        cy.get(".order-list .order-list-card")
            .should("not.exist")

        cy.get(".payment-summary")
            .should("not.exist")

        cy.get(".bag-part div")
            .contains("Card is")
            .should("have.text","Card is empty")
    })

})