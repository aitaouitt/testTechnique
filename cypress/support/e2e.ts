import './commands';
require('cypress-xpath');
afterEach(() => {
    cy.getCookies().then((cookies) => {
        const names = cookies.map((cookie) => cookie.name);
        Cypress.Cookies.preserveOnce(...names);
    });
})