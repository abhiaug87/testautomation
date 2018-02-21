
export class SelectAccountPage {

	addBankAccount = function(): void {
	

		browser.waitForVisible('#xui-searchfield-1018-inputEl', 5000);
		browser.setValue('#xui-searchfield-1018-inputEl', 'ANZ');
		browser.waitForVisible('//*[@id="dataview-1025"]', 5000);
		browser.click('//*[@id="dataview-1025"]');
	}

	enterBankAccountDetails =  function(): void {
	
		browser.waitForVisible('//*[@id="accountname-1037-inputEl"]', 5000);
		browser.setValue('//*[@id="accountname-1037-inputEl"]', 'Testing Account');
		browser.click('[data-automationid="accountType"]');
		browser.click('//*[@id="boundlist-1076-listEl"]/li[2]');
		browser.setValue('//*[@id="accountnumber-1068-inputEl"]', '123456');
		browser.click('#common-button-submit-1015-btnInnerEl');
		browser.waitForVisible('//*[@id="notify01"]', 5000);
	}

	verifySelectAccountPage = function(): void  {

		browser.waitForVisible('#xui-searchfield-1018-inputEl', 5000);
		expect(browser.isVisible('#xui-searchfield-1018-inputEl')).toBeTruthy();
	}

	
}

