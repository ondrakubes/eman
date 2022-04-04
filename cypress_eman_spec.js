function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
return newString;
}

const dayjs = require('dayjs')

describe('My First Test', () => {
  it('First test-case for Eman', () => {
    cy.visit('https://docs.google.com/forms/d/1dgFKz9AD32hq326wnGaeFw6YccoNuzxwdVPFVb4UeXE/viewform?edit_requested=true');
    cy.get('#mG61Hd').within(() => {
      cy.log('**Validate the mandatory fields**');
      cy.get('input:invalid')
      .should('have.length', 2);

      cy.log('**2) Fill in the first and second questions**')
      /* nepoužívám type-email pro případ výskytu více input type email */
      cy.get('[jscontroller="v4y9Mc"] > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .type('franta@vomacka.cz');

      cy.log('**2) Fill in the first and second questions**')
      cy.get('#i9 > .vd3tt > .AB7Lab')
      .click();

      cy.log('**Reverse text 3).*')
      cy.get('.AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .clear();
      cy.get('.AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .type('Duben');

      cy.get('.AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .invoke('val')
      .then(
        sometext => cy.get('.AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
        .clear()
        .type(reverseString(sometext))
      );

/*Confirm !!!!!!!*/

      cy.log('**third questions set date**')
      cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .clear();

      var beforedate=dayjs().add(7, 'day').format('YYYY-MM-DD');

      cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .type(beforedate);

      cy.log('**5) Check that the three first questions are still filled**')
      cy.log('**1. questions**')
      cy.get('[jscontroller="v4y9Mc"] > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .invoke('val')
      .should('not.be.empty');

      cy.log('**2. questions**')
      cy.get('#i9')
      .should('have.attr', 'aria-checked', 'true');

      cy.log('**3. questions**')
      cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd')
      .invoke('val').should('not.be.empty');


      cy.log('**Set 5. questions**')
      cy.get(".e2CuFe input:invalid")
      .should("have.length", 0);


      cy.get('.e2CuFe')
      .click();
      cy.get('.OA0qNb > [data-value="choose this"] > .vRMGwf')
      .should('have.text', 'choose this')
      .click();

      cy.log('**Check 5. questions**')
      cy.get('.KKjvXb > .vRMGwf')
      .should('have.text', 'choose this');

    })

    cy.log('**SEND FORM**')
    cy.get('.lRwqcd > .uArJ5e > .l4V7wb > .NPEfkd').click();
   
  })
})
