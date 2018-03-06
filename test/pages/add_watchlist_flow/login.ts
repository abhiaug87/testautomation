export class LoginPage {


	enterLoginCredentials = function (): void {

                browser.click('//*[@id="LoginLink"]');
		browser.setValue('//*[@id="page_email"]', 'kulkarniabhishek23887@gmail.com')
			.setValue('//*[@id="page_password"]', 'ayushbose@2002');
			
	}

	submitCredentials = function (): void {
		browser.click('//*[@id="LoginPageButton"]');
		
	}

	verifyLoginPage = function (): void {
		browser.waitForVisible('//*[@id="LoginLink"]', 10000);	
		expect(browser.isVisible('//*[@id="LoginLink"]')).toBeTruthy();
		browser.waitForVisible('//*[@id="page_email"]', 10000);	
		expect(browser.isVisible('//*[@id="page_email"]')).toBeTruthy();
		browser.waitForVisible('//*[@id="page_password"]', 10000);	
		expect(browser.isVisible('//*[@id="page_password"]')).toBeTruthy();
		browser.waitForVisible('//*[@id="LoginPageButton"]', 10000);	
		expect(browser.isVisible('//*[@id="LoginPageButton"]')).toBeTruthy();
	};

}


