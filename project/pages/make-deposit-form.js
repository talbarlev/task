import BasePage from "./base-page";
import SideNavbar from "./side-nav-bar";

export default class extends BasePage {
    get sidenavBar() {
        return new SideNavbar();
    }

    get continueButton() {
        return $("button=Continue");
    }

    get proceedButton() {
        return $("button=Proceed");
    }

    get amountInput() {
        return $("//*[text()='Amount']/following::input[1]");
    }

    async fillAmount(amount) {
        await this.amountInput.setValue(amount);
    }

    async getPaymentProviderButtonOption(text) {
        return await $(`label=${text}`);
    }

    async getPaymentCheckboxOption(text) {
        return await $(`div=${text}`);
    }

    async clickOnPaymentProviderByText(text) {
        await (await this.getPaymentProviderButtonOption(text)).click();
    }

    async clickOnPaymentCheckBoxOptionByText(text) {
        await (await this.getPaymentCheckboxOption(text)).click();
    }

    async clickOnContinue() {
        await this.continueButton.click();
    }

    async clickOnProceed() {
        await this.proceedButton.click();
    }

    async fillForm(paymentProviderOption, paymentCheckbox, amount) {
        await this.clickOnPaymentProviderByText(paymentProviderOption);
        await this.clickOnPaymentCheckBoxOptionByText(paymentCheckbox);
        await this.clickOnContinue();
        await this.amountInput.waitForStable({ timeout: 3000 })
        await this.fillAmount(amount);
        await this.clickOnProceed();
    }
}
