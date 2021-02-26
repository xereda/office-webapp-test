# Offices

## Overview

**Offices** is a simple CRUD with responsive design and made based on the progressive framework **Vue.js** and Tailwind _(CSS framework)_. It has a didactic objective to evaluate the techniques and architectural decisions that were made during its development.

Offices has unit and end-to-end testing coverage. Through Vercel's architecture, it has automatic deployment with each update of the main branch of the git repository.

Although not a requirement, for data persistence, the application integrates with Vercel Serverless Functions.

Demo application:
https://office-webapp-test.vercel.app/

## Some challenges

Until I started developing this example app, I hadn't used Tailwind yet. Understanding it took me a long time. Even though its polluted the template a little more, my final assessment of Tailwind is very positive. After mastering the main CSS helper classes, he becomes quite productive. It is an excellent ally in the development of interfaces. I introduced it to our UX Designers. Possibly, TailwindCSS, could be an excellent ally of a new design system.

> _Possibly, TailwindCSS, could be an excellent ally of a new design system._

## Tests

I did a test coverage considering unit and end-to-end tests. For the generic components, I used the unit tests and for the main user flows, I adopted E2E, with the excellent Cypress tool. The tests done with Cypress guarantee the functioning of the main user flows, such as listing, adding, editing, and deleting an office. It also tests the form's validation dynamics.

According to Cypress best practices, the ideal is that E2E tests have access to a database that is distinct and isolated from other environments. This application has this important feature. The data handled by the tests are generated at the beginning and removed at the end of the testing session. The data handled by the tests are cleaned and generated each testing session.

Both the tests, like unit tests, and E2E tests, are performed on a Github Actions pipeline. E2E tests also have a plus. The test videos are uploaded to the Cypress Dashboard.

I believe that Cypress today is one of the main ways of automating testing a web application. I am your evangelist in the current company.

## For to run this application in your local environment:

- [ ] Clone this repository and access the repository's local folder:

      git clone https://github.com/xereda/office-webapp-test

      cd office-webapp-test

- [ ] Install the dependencies:

       npm install

- [ ] Run the application:

       npm run serve

- [ ] Accessing the application with your browser:

       http://localhost:8080/

- [ ] Perform the unit tests:

       npm run test:unit

- [ ] Perform the E2E tests:

       npm run test:e2e

> Reminder: the repository is integrated with the Vercel platform, so to access a demo of the application, just access the following url:

[https://office-webapp-test.vercel.app/](https://office-webapp-test.vercel.app/)
