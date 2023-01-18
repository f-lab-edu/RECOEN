describe('template spec', () => {
  it('visit https://recoen.vercel.app/', () => {
    cy.visit('https://recoen.vercel.app/');
    cy.viewport('macbook-13');

    cy.contains('로그인').click();
    cy.contains('Google로 로그인하기').click();

    cy.get('input[type="email"]');
  });
});
