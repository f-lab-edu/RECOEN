describe('Cypress login', () => {
  context('로그인이 성공하면', () => {
    it('홈에 로그아웃 버튼이 보여야한다', () => {
      cy.login();
      cy.visit('https://recoen.vercel.app/');
      cy.wait('@session');

      cy.viewport('macbook-13');

      cy.contains('로그아웃')
        .should('exist')
        .then(() => {
          cy.log('Cypress login successful');
        });
    });
  });
});
