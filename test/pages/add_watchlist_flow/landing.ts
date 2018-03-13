
export class LandingPage {

	navigateToLandingPage = function() : void {
	

		browser.setValue('//*[@id="searchString"]', 'cars for sale')
		browser.pause(10000);
	   	browser.click('//*[@id="generalSearch"]/div[2]/button/span');
	}

	verifyLandingPage = function(): void {
		
	expect(browser.isVisible('//*[@id="SiteHeader_SiteTabs_browseDropDownLink"]')).toBeTruthy();
	expect(browser.getText()).toEqual('Sell');
	expect(browser.isVisible('//*[@id="SiteHeader_SiteTabs_sellLink"]')).toBeTruthy();
	expect(browser.getText()).toEqual('Browse');
	expect(browser.isVisible('//*[@id="SiteHeader_SiteTabs_myTradeMeDropDownLink"]')).toBeTruthy();
	expect(browser.getText()).toEqual('My Trade Me');
	expect(browser.isVisible('//*[@id="CommunityDropDown"]/a')).toBeTruthy();
	expect(browser.getText()).toEqual('Community');
	expect(browser.isVisible('//*[@id="SearchTabs1_MarketplaceAnchor"]')).toBeTruthy();
	expect(browser.getText()).toEqual('Marketplace');
	expect(browser.isVisible('//*[@id="SearchTabs1_JobsAnchor"]')).toBeTruthy();
	expect(browser.getText()).toEqual('Jobs');
	expect(browser.isVisible('//*[@id="SearchTabs1_MotorsAnchor"]')).toBeTruthy();
	expect(browser.getText()).toEqual('Motors');
	expect(browser.isVisible('//*[@id="SearchTabs1_PropertyAnchor"]')).toBeTruthy();
	expect(browser.getText()).toEqual('Property');
    } 

}
