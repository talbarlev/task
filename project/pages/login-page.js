import BasePage from "./base-page";

export default class LoginPage extends BasePage {
    // Add page locator
    pathLogin = "/login"

    get emailInput() {
        return $("[name='email']");
    }

    get passwordInput() {
        return $("[name='password']");
    }

    get submitButton() {
        return $("[data-testid='test-submit']");
    }

    // Override
    open() {
        return super.open(this.pathLogin);
    }

    async filllogin(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}

