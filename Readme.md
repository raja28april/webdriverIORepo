# Allure reports

    # step 1: npm install allure reports

npm install @wdio/allure-reporter --save-dev

    # step 2: npm install

Allure requires Java 8 or higher
npm install -g allure-commandline --save-dev

    # step 3: run command to generate report

npx allure generate allure-results

    # step 4: open report using command

npx allure open

    # step 5: clean results if required

npx allure generate --clean allure-results
