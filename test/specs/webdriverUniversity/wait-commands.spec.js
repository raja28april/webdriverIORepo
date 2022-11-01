describe('', () => {

    beforeEach(async () => {
        // await browser.maximizeWindow();
        await browser.url('/Ajax-Loader/index.html')
    });

    it('using pause command - not recommended', async () => {
        // const btn_clickMe = await $('#button1');
        const btn_clickMe = await $('//*[text()="CLICK ME!"]/..');
        await browser.pause(5000);
        await btn_clickMe.click();
        await browser.pause(1500);
    });

    it('using waitFor methods', async () => {
        const btn_clickMe = await $('#button1');
        // await btn_clickMe.waitForClickable({ timeout: 3000 })
        await btn_clickMe.waitForClickable();
        await btn_clickMe.click();
        await browser.pause(1500);
    });

    it('using wait for displayed', async () => {
        const btn_clickMe = await $('#button1');
        await btn_clickMe.waitForDisplayed();
        await btn_clickMe.click();
        await browser.pause(1500);
    });

    it('using waitfor exists', async () => {
        const btn_clickMe = await $('#button1');
        await btn_clickMe.waitForExist();
    });

    it.only('using wait until', async () => {
        await browser.url('/Accordion/index.html');
        const btn_loading = await $('#text-appear-box');
        await btn_loading.waitUntil(async function () {
            return (await this.getText() === 'LO7ADING COMPLETE');
        }, {
            timeout: 15000,
            timeoutMsg: `Element visible for more that 15sec`
        })

    });
});