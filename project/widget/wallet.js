import BasePage from "../pages/base-page";
import makeDepositForm from "../pages/make-deposit-form";

export default class WalletWidget extends BasePage {

    // add a functoin thats wait for the load
    get baseLocator() {
        return "#section-wallets";
    }

    get addDepositbutton() {
        return $('a[href="/deposit"]')
    }

    async clickOnDeposit() {
        const depositButton = await this.addDepositbutton;
        await depositButton.scrollIntoView();
        await depositButton.click();
        return new makeDepositForm();
    }
}