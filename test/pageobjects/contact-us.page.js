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

    get successfulSubmissionHeader() {
        return $('#contact_reply>h1');
    }
    get unSuccessfulSubmissionHeader() {
        return $('body');
    }




    async submitForm(firstName, lastName, emailAddress, message) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.inputComment.setValue(message);
        await browser.waitThenClick(this.submitButton);
        await browser.pause(2000);
    }
}

export default new contactUsPage();