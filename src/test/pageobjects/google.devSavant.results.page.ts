const SELECTORS = {
    ALL_PAGE: '[id="topbody"]',
    DEVSAVANT_LOGO: '(//*[@alt="Logo"])[3]'
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DevSavant {
    get allPage() {
        return $(SELECTORS.ALL_PAGE);
    }

    get devSavantLogo() {
        return $(SELECTORS.DEVSAVANT_LOGO)
    }

    waitMainPageIsDisplayed() {
        this.devSavantLogo.waitForDisplayed({ timeout: 5000 });
    }

    takeScreenshot() {
        this.allPage.saveScreenshot('src/screenShots/loadPage.png');
        driver.pause(2000); //TODO it could be with a promice
        this.allPage.saveScreenshot('src/screenShots/mainPage.png');
    }
}

export default new DevSavant();
