describe('Cypress login', () => {
  context('로그인이 성공하면', () => {
    it('홈에 로그아웃 버튼이 보여야한다', () => {
      cy.login();
      cy.visit('/');
      cy.wait('@session');

      cy.contains('로그아웃')
        .should('exist')
        .then(() => {
          cy.log('Cypress login successful');
        });
    });
  });

  context('로그아웃에 성공하면', () => {
    it('홈에 로그인 버튼이 보여아함.', () => {
      cy.logout();
      cy.contains('로그인').should('exist');
    });
  });
});
