describe('advanced element interactions - examples', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
    });
    it('inputs ', async () => {
        await browser.url('/Contact-Us/contactus.html');
        const firstNameTextField = $('[name="first_name"]');
        await firstNameTextField.addValue('Add you text here');
        await firstNameTextField.addValue('My added text');
        await browser.pause(5000);

        await firstNameTextField.setValue('Hello world');
        await browser.pause(2000);

        await firstNameTextField.clearValue();
    });


});