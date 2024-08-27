import BasePage from "../base-page"

export default class PopUpCrypto extends BasePage {

    pageLocator() {
        return ".pay-modal_inner";
    }

    get cancelButton() {
        return $(".btncancelfull")
    }

    async cancel() {
        await this.cancelButton.click();
    }

}