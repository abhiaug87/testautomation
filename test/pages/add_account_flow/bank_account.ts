export class BankAccountPage {

	selectBankAccount = function(): void {

		browser.click('span.text');
	}

	verifyBankAccountPage = function(): void {
			expect(browser.getUrl()).toContain('BankAccounts');
		}
	
	verifyBankAccountAdded = function(): void {
			expect(browser.isVisible('//*[@id="notify01"]')).toBeTruthy();
		}
	}