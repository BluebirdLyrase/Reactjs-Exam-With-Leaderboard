describe('fallA5person', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('', () => {
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    cy.get('[id="again-btn"]').click();
    doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
    // cy.get('[id="again-btn"]').click();
    // doingExam();
  });
});

const doingExam = () => {
  const userName = `user-${Math.floor(Date.now())}`;
  cy.get("[name='username']").type(userName);
  cy.get('[id="enter-btn"]').click();
  for (let i = 0; i < 19; i++) {
    chooseA();
  }
  cy.get('[value="A"]').click();
  cy.get('[id="finish-button"]').click();
};

const chooseA = () => {
  cy.get('[value="A"]').click();
  cy.get('[id="next-button"]').click();
};
