import OpenPagePage from './openPage.page';

const SELECTORS = {
    SEARCH: '[name="q"]',
    GOOGLE_LOGO: '[alt="Google"]',
    I_AM_FELLING_LUCKY: '(//*[@name="btnI"])[2]',
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Devsavant extends OpenPagePage {
    openGoogle() {
        return super.openGoogleSearchDevSavantResults();
    }

    get search() {
        return $(SELECTORS.SEARCH);
    }

    get googlelogo() {
        return $(SELECTORS.GOOGLE_LOGO);
    }

    get iAmFellingLucking() {
        return $(SELECTORS.I_AM_FELLING_LUCKY);
    }

    inputDevSavantSearch(search: string) {
        this.search.setValue(search);
    }

    clickGoogleLogo() {
        this.googlelogo.click();
    }

    clickIAmFellingLucking() {
        this.iAmFellingLucking.click();
    }
}

export default new Devsavant();
