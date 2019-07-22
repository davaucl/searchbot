# searchbot
Searchbot using cypress

## Running your test

1. `npm run cypress`
2. choose the persona you want to run
3. you will need to login to the platform manually for thee test to run
4. watch and enjoy

## Writing your test

use `cy.searchasyoutype` to write your coveo search test. It takes 2 entries, your term that you want to search for and the result you want it to click in the search interface.

`cy.searchasyoutype([searchTerm], [ResultToClick])`

