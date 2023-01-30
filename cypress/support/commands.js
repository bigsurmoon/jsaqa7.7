const seats = require("D:/Work, Study/HM/06. JSQA/7.7/cypress/fixtures/seats.json");

Cypress.Commands.add("choosePlace", seats, () => {
  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
    ).click();
  });
});
