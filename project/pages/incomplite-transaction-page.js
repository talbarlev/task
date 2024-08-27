import BasePage from "./base-page";

export default class IncompliteTransactionPage extends BasePage {

    get pageLocator() {
        return "[data-testid='test-id-class']";
    }

    get closeButton() {
        return $("[data-testid='close-button']");
    }

    async close() {
        await (await this.closeButton).click();
    }
}