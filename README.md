## How to run terst script
1. input "email" and "password" in to `../data/test-account.json`

2. Run script as below command

Headedless mode 
`npx playwright test tests/nok-cash.spec.t`

Headeded mode 
`npx playwright test tests/nok-cash.spec.ts --heaeded`

UI mode 
`npx playwright test tests/nok-cash.spec.t --ui`


NOTE: The resource is contains in the `nok-plus` folder

**** 
In my script, I'm facing an issue with closing the cookie
consent pop-up. I've tried the following solutions:

• Clicking "Accept All Cookies."

• Sending a request to the API endpoint: https: / / xn--
m3calathe9asc7b2b6iqe.com/api/cookies.

• Removing the modal → This method works, but I can't
perform any further actions.

So, I created a test script that should cover the entire flow.
