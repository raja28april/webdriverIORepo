import homePage from "../../pageobjects/automation-test-store/home.page";
import SkinCarePage from "../../pageobjects/automation-test-store/skincare.page"

describe('add items to basket', () => {
    it("add specific 'skincare products' to basket & validate cart total", async () => {
        await homePage.open();

        await homePage.categoryMenuComponent.categoryMenuLink('Skincare')[1].click();

        await SkinCarePage.addSpecificItems_validateTotal("creme precieuse nuit 50ml", "total moisture facial cream");
    });
});