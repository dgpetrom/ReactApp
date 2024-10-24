**Description**

**Problem name**
[ReactJS] Phone API

**Problem statement**
You are provided with a web API endpoint https://synth.hackerearth.com/api/phones that has information about phones.


The structure of the API is as below:

[
  {
    "id": string,
    "manufacturer": string,
    "name": string,
    "details": {
      "system": string,
      "display": integer,
      "processor": string,
      "launch_date":new Date(dateString),
      "features": {
        "description": string
        "ratings": integer,
        "sellers": [string]
      }
    },
    "units": integer
  }
]

**Technical specifications**


**Tech stack **

Front end: ReactJS
Ports 
Front end: 5000
Tasks

**The following functionalities must be implemented in the App.js file:**

Fetch the data from the API endpoint to display phone data and handle errors by setting the error state, while also managing the loading state.
If the 'isLoading' state is true, render a "\<div\>" with the text 'Loading...' to indicate that the data is being loaded.
If the error state is true, render a "\<div\>" the error message, preceded by the text 'Error:'. Render and display a list of phones with their corresponding details.

**Testing instructions **

The project is hosted on https://he-ide.hackerearth.com/<generated-hash>/. To see the real-time project progress and test the application's functionality, click on the Preview button.
To run any additional commands, use the Terminal. For example, navigate to the '/frontend' directory in the Terminal and use the command: npm run test.
Upon clicking the Run code or Submit code buttons, access the Build log or Execution log to review comprehensive details about the test outcomes.

**Submission instructions**

Clicking Run code compiles and runs your code against sample tests, but it won't give scores.
Clicking Submit code runs your code against multiple test cases, assessing different scenarios holistically and the score will be assigned accordingly. So, make sure your code solves the problem statement correctly.


**Project source**
frontend

**Redirect with hash**
Checked

**Build commands**
npm install
npm run build

**Deploy commands**
npm start

**Sample Evaluation commands**
npm run sample_tests

**Evaluation commands**
npm run main_tests

**Evaluation report path**
xunittest-report.xml

**Screenshot settings**
Page 1
TitleLanding Page
Url
Status
