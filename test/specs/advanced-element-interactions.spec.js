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

    it('dropdown', async () => {
        await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
        const dropDown_progLang = $('#dropdowm-menu-1');
        await dropDown_progLang.selectByAttribute('value', 'python');
        await expect(dropDown_progLang).toHaveValueContaining('python');
        await browser.pause(2000);

        const dropDown_tech = await $('#dropdowm-menu-2');
        await dropDown_tech.selectByIndex(2);
        await expect(dropDown_tech).toHaveValueContaining('MavEn', { ignoreCase: false });
        await browser.pause(2000);

        const dropDown_feLang = await $('#dropdowm-menu-3');
        await dropDown_feLang.selectByVisibleText('CSS');
        await expect(dropDown_feLang).toHaveValueContaining('CSS', { ignoreCase: true });
        await browser.pause(3000);
    });

    it.only('state commands', async () => {
        await browser.url('Dropdown-Checkboxes-RadioButtons/index.html');
        const lettuceRadioButton = await $('[value="lettuce"]');
        const lettuceRadioButton_isDisplayed = await lettuceRadioButton.isDisplayed();

        await expect(lettuceRadioButton_isDisplayed).toEqual(true);
        await expect(lettuceRadioButton).toBeEnabled();
        await browser.pause(5000);

        const lettuceRadioButton_isClickable = await lettuceRadioButton.isClickable();
        await expect(lettuceRadioButton_isClickable).toEqual(true);

        const cabbageRadioButton = await $('[value="cabbage"]');
        const cabbageRadioButton_isEnabled = await cabbageRadioButton.isEnabled();
        await expect(cabbageRadioButton_isEnabled).toEqual(false);
        await expect(cabbageRadioButton_isEnabled).toBeDisabled();

    });




});