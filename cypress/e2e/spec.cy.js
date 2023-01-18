describe('template spec', () => {
  it('visit https://recoen.vercel.app/', () => {
    cy.visit('/');
    cy.contains('로그인').click();
  });
});
