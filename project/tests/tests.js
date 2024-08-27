import LoginPage from "../pages/login-page";
import { PAYMENT_PROVIDER_ENUMS, paymentProvider, userLogin } from "../data"
import HomePage from "../pages/home-page";
import IncompliteTransactionPage from "../pages/incomplite-transaction-page";
import RandomGenerator from "../random-genrator";

const randomGenerator = new RandomGenerator();

describe(('Fun - with testing'), async () => {
    it('Login to app - and fill deposit form - when deposit is already awaitng for user', async () => {
        const amount = randomGenerator.getRandomNumber(1000, 20);

        const loginPage = new LoginPage();
        await loginPage.open();

        await loginPage.filllogin(userLogin.email, userLogin.password)

        const homePage = new HomePage();

        const incompliteTransactionPage = new IncompliteTransactionPage();
        await incompliteTransactionPage.waitForPageToLoad();
        await incompliteTransactionPage.close();

        const makeDepositForm = await homePage.wallet.clickOnDeposit();
        // loader
        await makeDepositForm.fillForm(PAYMENT_PROVIDER_ENUMS.CRYPTO.name, PAYMENT_PROVIDER_ENUMS.CRYPTO.checkboxs.CRYPTO_TO_FIAT, amount)

    });

    it('', async () => {

    });
});