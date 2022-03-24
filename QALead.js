// Visit the webpage to see if URL working
cy.visit('https://theqalead.com/')

// Checks if Login button is working and open Login page 
cy.contains('login', { matchCase: false }).click()

// Should be on a new URL which includes '/login/'
cy.url().should('include', '/login/')

// Checks whether Username field taking input
cy.contains('Username',{ matchCase: false })
  .type('Angman15')
     
// Checks whether Password field taking input
cy.contains('Password',{ matchCase: false })
  .type('Angshuman@15')
      