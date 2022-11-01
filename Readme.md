# Allure reports

    # step 1: install allure reports

npm install @wdio/allure-reporter --save-dev

    # step 2: install allure-commandline

Allure requires Java 8 or higher
npm install -g allure-commandline --save-dev

    <!-- # step 3: run command to generate report

npx allure generate allure-results

    # step 4: open report using command

npx allure open

    # step 5: clean results if required

npx allure generate --clean allure-results -->

    # step 3: Add config in onComplete hook and onPrepare hook
    npm i allure-commandline
    Add wdio config to generate reports in onComplete hook , ref: https://webdriver.io/docs/allure-reporter#autogenerate-report
    Add wdio confir to delete existing reports in OnPrepare hook if (fs.existsSync("./allure-results")) {
            fs.rmSync("./allure-results", { recursive: true });
        }

# Commands

1. Create a command.js file
2. add a command
3. Add beforeCommand hook

# Screenshot

1. add in aftertest hook in wdio config - if error takeScreenshot

# Run specs

case1:
npx wdio --spec {path}
eg: npx wdio --spec test/specs/webdriverUniversity/contact-us.spec.js
eg2: npx wdio --spec test/specs/webdriverUniversity/contact-us.spec.js --exclude test/specs/webdriverUniversity/contact-us.spec.js

case2:
npm run {scriptsName-Given-in-package.json}
eg:npm run automation-test-store-tests

# Run suites

npx wdio --suite {suiteName}
eg: npx wdio --suite smoke
