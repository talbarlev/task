import WalletWidget from "../widget/wallet";
import BasePage from "./base-page";
import SideNavbar from "./side-nav-bar";

export default class HomePage extends BasePage {
    get sideNavbar() {
        return new SideNavbar();
    }

    get wallet() {
        return new WalletWidget();
    }
}