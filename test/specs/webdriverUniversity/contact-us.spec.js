import allureReporter from "@wdio/allure-reporter";
import contactUsPage from "../../pageobjects/webdriverUniversity/contact-us.page";

describe('webdriverUniversity contact us page', () => {

    beforeEach(async () => {
        // await browser.maximizeWindow();
        await contactUsPage.open();
        console.log(`>> browser object: ${JSON.stringify(browser)}`);
    });

    it.only('', () => {
        console.log('no');
        console.log("CONFIG ENV: " + browser.config.environment);
    });

    it('valid submission - submit all information', async function () {
        // this.retries(1);
        allureReporter.addFeature("Contact us page - valid submission");
        allureReporter.addDescription("Validate contact us page by submitting all data");
        allureReporter.addSeverity("Critical");
        /* //first name
        const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const email = await $('//*[@name="email"]');
        //message
        const message = await $('//*[@name="message"]');
        //submit button
        const btn_submit = await $('//input[@value="SUBMIT"]');

        await firstName.setValue('Raja');
        await lastName.setValue('R');
        await email.setValue('raja123@gmail.com');
        await message.setValue('Testing the message section');

        // await browser.debug();
        // await btn_submit.click();
        browser.waitThenClick(btn_submit); */

        contactUsPage.submitForm('Raja', 'R', 'raja123@gmail.com', 'Testing the message section');

        const successfulSubmissionHeader = $('#contact_reply>h1');
        console.log(`successfulSubmissionHeader element: ${JSON.stringify(contactUsPage.successfulSubmissionHeader)}`);
        await expect(contactUsPage.successfulSubmissionHeader).toHaveText('Thank You for your Message!')//expect library
        const successfulSubmissionHeader2 = contactUsPage.successfulSubmissionHeader.getText();
        expect(successfulSubmissionHeader2).toEqual('Thank You for your Message!')//jest library
        await browser.pause(5000);

    });

    it('invalid submission - dont submit all information', async () => {
        allureReporter.addFeature("Contact us page - invalid submission");
        allureReporter.addDescription("Validate contact us page by not submitting all data");
        allureReporter.addSeverity("normal");
        //first name
        /* const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const message = await $('//*[@name="message"]');
        //submit button
        const btn_submit = await $('//input[@value="SUBMIT"]');

        await firstName.setValue('Raja');
        await lastName.setValue('R');
        await message.setValue('Testing the message section');
        await btn_submit.click(); */

        contactUsPage.submitForm('Raja', 'R', '', 'Testing the message section');

        // const errormsg = await $('body');
        await browser.pause(5000);
        await expect(contactUsPage.unSuccessfulSubmissionHeader).toHaveTextContaining(['Errror: Invalid email address', 'Error: all fields are required', 'Errror: Invalid email address']);
    });
});