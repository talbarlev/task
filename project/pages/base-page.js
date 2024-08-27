import { browser } from '@wdio/globals'


export default class BasePage {
   async open (path) {
        return await browser.url(`https://client.amega.finance/${path}`);
    }

    get pageLocator(){
        return "";
    }

    async waitForPageToLoad(timeout = 3000) {
        try {
          const element =  await $(this.pageLocator);
          await element.waitForExist();
        }
        catch (err) {
            const message = `Element '${this.pageLocator}' not found after ${timeout} ms. Error: ${err}`;
            throw new Error(message);
        }
    }
}
