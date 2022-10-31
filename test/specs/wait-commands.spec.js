describe('', () => {

    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Ajax-Loader/index.html')
    });

    it('using pause command - not recommended', async () => {
        // const btn_clickMe = await $('#button1');
        const btn_clickMe = await $('//*[text()="CLICK ME!"]/..');
        await browser.pause(5000);
        await btn_clickMe.click();
        await browser.pause(1500);
    });
});