
export class DashboardPage {

	navigateToBankAccountsPage = function() : void {
	

		browser.click('#Accounts')
	   		.click('//*[@id="xero-nav"]/div[2]/div[2]/div[1]/ul/li[2]/ul/li[1]/a');
	}

	verifyDashboardPage = function(): void {
		
	expect(browser.isVisible('#Dashboard')).toBeTruthy();
	expect(browser.isVisible('#Accounts')).toBeTruthy();
	expect(browser.isVisible('#Payroll')).toBeTruthy();
	expect(browser.isVisible('#Reports')).toBeTruthy();
	expect(browser.isVisible('#Contacts')).toBeTruthy();
	expect(browser.isVisible('#Settings')).toBeTruthy();

    } 

}
