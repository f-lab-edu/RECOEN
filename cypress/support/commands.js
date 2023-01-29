// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.intercept('/api/auth/session', { fixture: 'session.json' }).as('session');

  // Set the cookie for cypress.
  // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
  // This step can probably/hopefully be improved.
  // We are currently unsure about this part.
  // We need to refresh this cookie once in a while.
  // We are unsure if this is true and if true, when it needs to be refreshed.
  cy.setCookie('next-auth.session-token', Cypress.env('SESSION_TOKEN'));
  cy.setCookie(
    '__Secure-next-auth.session-token',
    Cypress.env('SESSION_TOKEN'),
    { secure: true },
  );
});

Cypress.Commands.add('logout', () => {
  cy.visit('/api/auth/signout');
  cy.get('form').submit();
});

Cypress.Commands.add(
  'handleTitleContentInputs',
  ({ title = '제목', content = '내용' } = {}, { isClear = false } = {}) => {
    if (isClear) {
      cy.get('[data-testid="title-input"]')
        .find('input')
        .clear({ force: true });
    }

    cy.get('.toastui-editor-pseudo-clipboard').type(content, {
      force: true,
    });

    cy.get('[data-testid="title-input"]')
      .find('input')
      .type(title, { force: true });
  },
);

Cypress.Commands.add('fillArticleMetaData', () => {
  cy.get('[data-testid="tag-input"]').type('태그').type('{enter}');

  cy.get("[data-testid='desc-input']").type('설명문');

  cy.get('[data-testid="file-input"]').selectFile('public/recoen.png', {
    force: true,
  });
});
