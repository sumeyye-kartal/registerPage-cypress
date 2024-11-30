import { errorMessages } from "../../register.project/src/components/Register"

describe('Register Page', () => {
  describe("Error Messages", () => {
  it('name input throws error for 2 chars', () => {
    cy.visit('http://localhost:5175/')

    cy.get('[data-cy="ad-input"]').type("em")

    cy.contains(errorMessages.ad)

  })
  it('Surname input throws error for 2 chars', () => {
    cy.visit('http://localhost:5175/')

    cy.get('[data-cy="soyad-input"]').type("sa")

    cy.contains(errorMessages.soyad)

  })
  it('Email input throws error for emre@wit.', () => {
    cy.visit('http://localhost:5175/')

    cy.get('[data-cy="email-input"]').type("emre@wit.")

    cy.contains(errorMessages.email)

  })
  it('Password input throws error for 12345', () => {
    cy.visit('http://localhost:5175/')

    cy.get('[data-cy="password-input"]').type("12345")

    cy.contains(errorMessages.password)

  })
  it('Button is disabled for unvalidated inputs', () => {
    cy.visit('http://localhost:5175/')

    cy.get('[data-cy="password-input"]').type("12345")

    cy.get('[data-cy="submit-button"]').should("be.disabled")

  })
  it("submits form on validated inputs", () => {
    cy.visit('http://localhost:5175/')
    cy.get('[data-cy="ad-input"]').type("Emre")
    cy.get('[data-cy="soyad-input"]').type("Şahiner")
    cy.get('[data-cy="email-input"]').type("emre@wit.com.tr")
    cy.get('[data-cy="password-input"]').type("1234Aa**")
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="response-message"]').should("be.visible")
  })
})
})