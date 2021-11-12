/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class OpenPagePage {
    /**
     * Opens a sub page of the page
     */
    openGoogleSearchDevSavantResults() {
        return browser.url('https://www.google.com/');
    }
}

export default OpenPagePage;
