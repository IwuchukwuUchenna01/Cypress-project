/// <reference types="cypress" />
const userName = "John Doe";
const passWord = "ThisIsNotAPassword";
const url = 'https://katalon-demo-cura.herokuapp.com/'
describe('E2E UI Test', () => {
  it('LoginAndBookAppointment', () => {
    cy.visit(url)
    //click make appointment 
    cy.get("#btn-make-appointment").click();
    cy.get('#txt-username').type(userName);
    cy.get('#txt-password').type(passWord);
  
    //Login
    cy.get('#btn-login').click();

    //book Appointment 
    cy.get('#combo_facility').select("Hongkong CURA Healthcare Center");
    cy.get('#radio_program_medicaid').click();
    cy.get('.checkbox-inline').click();
    cy.get('.col-sm-4 > :nth-child(2)').click();
    cy.get('#txt_visit_date').type("16/01/2024");
    cy.get('#btn-book-appointment').click();

    //contains Appointment Confirmation and confirms readmission status being yes 
    cy.get('#summary');
    cy.get('h2').contains("Appointment Confirmation");
    cy.get('#hospital_readmission').contains("Yes");

  })
})