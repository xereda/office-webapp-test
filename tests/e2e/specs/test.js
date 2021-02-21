const E2E_KEY = 'E2E';

describe('Offices App - integrated tests', () => {
  beforeEach(() => {
    cy.task('service:removeAllOffices');
  });

  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('Offices');
    cy.contains('No content');
  });

  it.only('edit a new location', () => {
    cy.task('service:addOffice');
    cy.visit('/');

    cy.get('[data-test=card]').click();
    cy.contains('EDIT').click();
    cy.contains('Edit location');
    cy.get('#title')
      .clear()
      .type(E2E_KEY);
    cy.contains('Save').click();

    cy.url().should('not.include', '/add');
    cy.contains(E2E_KEY).should('be.visible');
  });

  it('remove a new location', () => {
    cy.task('service:addOffice');
    cy.visit('/');

    cy.get('[data-test=card]').click();
    cy.contains('DELETE').click();

    cy.url().should('not.include', '/add');
    cy.contains('No content').should('be.visible');
    cy.contains('LOCATION HAS BEEN REMOVED').should('be.visible');
  });

  it('clicking "add new location" navigates to a new route', () => {
    cy.visit('/');
    cy.contains('Add New Location').click();

    cy.url().should('include', '/add');
  });

  it('consists of the form data', () => {
    cy.visit('/add');

    cy.contains('Save').should('be.disabled');

    cy.get('#title')
      .type(' ')
      .blur();
    cy.get('#title')
      .type(' ')
      .blur();
    cy.get('#address')
      .type(' ')
      .blur();
    cy.get('#fullName')
      .type(' ')
      .blur();
    cy.get('#jobPosition')
      .type(' ')
      .blur();
    cy.get('#phone')
      .type(' ')
      .blur();
    cy.get('#email')
      .type(' ')
      .blur();

    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#title').type('.');
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#address').type('.');
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#fullName').type('.');
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#jobPosition').type('.');
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#phone').type('.');
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#email')
      .type(' ')
      .blur();
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#email')
      .type('.')
      .blur();
    cy.contains('Invalid email address').should('be.visible');
    cy.contains('Save').should('be.disabled');

    cy.get('#email')
      .clear()
      .type('email@domain.com')
      .blur();

    cy.contains('Save').should('be.enabled');
  });

  it('add a new location', () => {
    cy.visit('/add');

    cy.get('#title').type(E2E_KEY);
    cy.get('#address').type('.');
    cy.get('#fullName').type('.');
    cy.get('#jobPosition').type('.');
    cy.get('#email').type('e@mail.com');
    cy.get('#phone').type('.');

    cy.contains('Save').click();

    cy.url().should('not.include', '/add');
    cy.contains(E2E_KEY).should('be.visible');
  });
});
