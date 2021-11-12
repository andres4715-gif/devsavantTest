import  Devsavant from '../pageobjects/google.devSavant.page'
import  DevSavant from '../pageobjects/google.devSavant.results.page'

let wordToSearch: string = 'Devsavant'

describe('Take a screenshot for DevSavant web page', () => {
    it('should be able to open a browser window', () => {
        Devsavant.openGoogle();
        Devsavant.inputDevSavantSearch(wordToSearch);
        Devsavant.clickGoogleLogo();
        Devsavant.clickIAmFellingLucking();
    });

    it('should be able interact with elemets', () => {
        DevSavant.waitMainPageIsDisplayed();
        DevSavant.takeScreenshot();
    });

    it('should be able to take a screeshot', () => {
        DevSavant.takeScreenshot();
        browser.pause(1000);
    });
})
