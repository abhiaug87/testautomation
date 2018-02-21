export class LoginPage {


	enterLoginCredentials = function (): void {


		browser.setValue('#email', 'abhi.cal2008@gmail.com')
			.setValue('#password', 'Auckland2018');
			
	}

	submitCredentials = function (): void {
		browser.click('//*[@id="submitButton"]');
		
	}

	verifyLoginPage = function (): void {
		browser.waitForVisible('#email', 10000);	
		expect(browser.isVisible('#email')).toBeTruthy();
	};

}


