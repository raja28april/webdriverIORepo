describe('webdriverUniversity contact us page', () => {

    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Contact-Us/contactus.html');
    });

    it('valid submission - submit all information', async () => {
        //first name
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
        await btn_submit.click();

        const successfulSubmissionHeader = $('#contact_reply>h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!')

        await browser.pause(5000);

    });

    it('invalid submission - dont submit all information', async () => {
        //first name
        const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const message = await $('//*[@name="message"]');
        //submit button
        const btn_submit = await $('//input[@value="SUBMIT"]');

        await firstName.setValue('Raja');
        await lastName.setValue('R');
        await message.setValue('Testing the message section');
        await btn_submit.click();
        const errormsg = await $('body');
        await browser.pause(5000);
        await expect(errormsg).toHaveTextContaining(['Errror: Invalid email address', 'Error: all fields are required', 'Errror: Invalid email address']);
    });
});