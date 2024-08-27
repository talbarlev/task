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

    it('API calls', async () => {
     // add Login API - with the relvant token verify those api (only if login success) + money in account
     // POST - deposit (1. verify 201, verify using GET account the amount before and after,2. verify response is similer to ui)
     // POST - withdraw  (1. verify 201, verify using GET account the amount before and after,2. verify response is similer to ui)
     // GET - accounts (1. verify 200, 2.response is smiller to ui)
     // Make any GET call with no token of login verify 401
     // Make a POST deposit call with no money in account - verify 400 with the relvant error message
     // make a POST call, with wrong data variable verify error 400 with the relavnt error message (no 500 of internal server error)
     // GET - account + GET accounts, and verify the data of account is identical as in the array
     
    });
});
