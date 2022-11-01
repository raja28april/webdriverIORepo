import BasePage from "./page";

class contactUsPage extends BasePage {
    open() {
        return super.open('Contact-Us/contactus.html');
    }
}

export default new contactUsPage();