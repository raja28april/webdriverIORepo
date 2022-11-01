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

    it('state commands', async () => {
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

    it('actions', async () => {
        //Drag & drop
        await browser.url("/Actions/index.html");
        const ele = await $('#draggable');
        const target = await $('#droppable');
        await ele.dragAndDrop(target);
        await browser.pause(2000);

        //double click
        const btn_doubleClick = await $('#double-click');
        await btn_doubleClick.doubleClick();
        await browser.pause(2000);

        //mouse hover
        await $("//button[text()='Hover Over Me First!']").moveTo();
        const firstLink = await $("(//a[text()='Link 1'])[1]");
        await firstLink.waitForClickable();
        await firstLink.click();

        await browser.pause(2000);

        //handling windows
        await browser.url('https://www.webdriveruniversity.com');
        await browser.newWindow('https://www.automationteststore.com');

        let currentWindow_title = await browser.getTitle();
        console.log(`>> Current window title: ${currentWindow_title}`);
        await browser.pause(3000);

        await browser.switchWindow('WebDriverUniversity.com');
        let parentWindow_title = await browser.getTitle();
        console.log(`>> Parent title window: ${parentWindow_title}`)
        await expect(browser).toHaveUrlContaining('webdriveruniversity.com');
        await browser.pause(2000);

        await $('#contact-us').click();
        await browser.switchWindow('automationteststore');
        await browser.closeWindow();

        await browser.switchWindow('contactus');
        await browser.closeWindow();

        await browser.switchWindow('webdriveruni');
        console.log(await browser.getTitle());
        await browser.pause(3000);

    });

    it('iframes handling', async () => {
        await browser.url('/IFrame/index.html');
        const frame = await $('#frame');
        await browser.switchToFrame(frame);
        await $('//*[text()="Our Products"]').click();
        await browser.switchToParentFrame();
        await browser.pause(3000);
    });

    it('alerts', async () => {
        await browser.url('/Popup-Alerts/index.html');
        await $('#button1').click();
        // await browser.waitUntil(async function () {
        //     browser.isAlertOpen();
        // }, {
        //     timeout: 10000,
        //     timeoutMsg: 'alert not present within 10secs'
        // });
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(2000);

        await $('#button4').click();
        const alertText = await browser.getAlertText();
        await expect(alertText).toEqual('Press a button!');

        await browser.acceptAlert();
        await expect($('#confirm-alert-text')).toHaveText('You pressed ok!');
        await browser.pause(2000);

        await $('#button4').click();
        await browser.pause(2000);
        await browser.dismissAlert();
        await expect($('#confirm-alert-text')).toHaveText('You pressed cancel!');
        await browser.pause(2000);

    });

    it('file upload', async () => {
        await browser.url('/File-Upload/index.html');
        await $('#myFile').addValue(`${process.cwd()}/test/data/dummy-file.txt`);
        await browser.pause(2000);
        await $('#submit-button').click();
        await browser.pause(2000);

    });

    it.only('JS execute', async () => {
        await browser.url('/Hidden-Elements/index.html');
        await browser.execute(() => {
            return document.getElementById('not-displayed').setAttribute('id', '');
        })
        await browser.execute(() => {
            return document.body.style.backgroundColor = 'blue';
        })
        await browser.pause(3000);

    });





});