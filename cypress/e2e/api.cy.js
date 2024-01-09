import { userName,passWord,url,facility,date,confirmationText } from "./param.cy";
/// <reference types="cypress" />

describe('E2E UI Test', () => {
  it('LoginAndBookAppointment', () => {
    cy.visit(url)
    //click make appointment 
    cy.get("#btn-make-appointment").click();
    cy.get('#txt-username').type(userName);
    cy.get('#txt-password').type(passWord);
  
    //Login
    cy.get('#btn-login').click();
  })
  after(()=>{
  //logout
  cy.get('#menu-toggle').click();
  cy.get(':nth-child(6) > a').click();
  });
  
  it('BookAppointment', () => {
    //book Appointment 
    cy.get('#combo_facility').select(facility);
    cy.get('#radio_program_medicaid').click();
    cy.get('.radio-inline').invoke('text').as('valueRadioProgram')
    cy.get('@valueRadioProgram').then((text)=>{
      cy.log('Label Text', text);
    })
    cy.get('.checkbox-inline').click();
    cy.get('.col-sm-4 > :nth-child(2)').click();
    cy.get('#txt_visit_date').type(date);
    cy.get('#btn-book-appointment').click();

    //contains Appointment Confirmation and confirms readmission status being yes 
    cy.get('#summary');
    cy.get('h2').contains(confirmationText);
    cy.get('#hospital_readmission').contains("Yes");

  })
})