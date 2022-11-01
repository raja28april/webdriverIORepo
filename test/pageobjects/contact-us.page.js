import BasePage from "./page";

class contactUsPage extends BasePage {
    open() {
        return super.open('Contact-Us/contactus.html');
    }

    get inputFirstName() {
        return $('//*[@name="first_name"]');
    }

    get inputLastName() {
        return $('//*[@name="last_name"]');
    }
    get inputEmailAddress() {
        return $('//*[@name="email"]');
    }
    get inputComment() {
        return $('//*[@name="message"]');
    }

    get submitButton() {
        return $('//input[@value="SUBMIT"]');
    }

    async submitForm(firstName, lastName, emailAddress, message) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.inputComment.setValue(message);
        await browser.waitThenClick(this.submitButton);
    }
}

export default new contactUsPage();