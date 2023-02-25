import './commands';
require('cypress-xpath');
import '@cypress/code-coverage/support'
afterEach(() => {
    cy.getCookies().then((cookies) => {
        const names = cookies.map((cookie) => cookie.name);
        Cypress.Cookies.preserveOnce(...names);
    });
})