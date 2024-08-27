import BasePage from "./base-page"

export default class SideNavbar extends BasePage {
    // cause there are only 3 options think how to make it as choosing from a list
    get homeButton() {
        return $("#button-home");
    }

    get cashBackButton() {
        return $("#button-cashback");
    }

    get hubButton() {
        return $('#button-hub');
    }


    async clickOnHomeButton() {
        await this.homeButton.click();
    }
}