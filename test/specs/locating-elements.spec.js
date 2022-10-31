describe('Locating elements', () => {

    beforeEach(async () => {
        browser.maximizeWindow();
        await browser.url('https://selectors.webdriveruniversity.com/');
    });

    it('Locating element', async () => {
        await browser.$('[href="#portfolio"]').click();
        await browser.pause(3000);

        const btn_webDriver = await $('[data-target="#portfolioModal1"]');
        btn_webDriver.click();
        browser.pause(3000);
    });

    it.only('Locating elements using $$', async () => {
        const expectedHeaders = ['#', 'First', 'Last', 'Handle', '1', '2', '3', 'Firstname', 'Lakstname', 'Age'];

        const actualHeaders = [];
        const tableHeaderTitles = await $$('//table//th');
        for (const title of tableHeaderTitles) {
            actualHeaders.push(await title.getText());
            console.log(await title.getText());
        }

        expect(expectedHeaders).toEqual(actualHeaders);

    });
});