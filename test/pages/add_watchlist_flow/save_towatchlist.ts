export class SaveToWatchlistPage {

	SaveToWatchlist = function(): void {

		browser.waitForVisible('//*[@id="Watchlist_SaveToWatchlistButton"]', 10000);	
		browser.click('//*[@id="Watchlist_SaveToWatchlistButton"]');
		
	}

	Logout = function(): void {

        browser.waitForVisible('//*[@id="container"]/div[1]/div[2]/div/p/a', 10000);
		browser.click('//*[@id="container"]/div[1]/div[2]/div/p/a');
	}

	verifyLogout = function(): void {
			expect(browser.isVisible('//*[@id="NotLoggedInDiv"]/a[1]')).toBeTruthy();
			expect(browser.getText()).toEqual('Register');
			expect(browser.isVisible('//*[@id="LoginLink"]')).toBeTruthy();
			expect(browser.getText()).toEqual('Log in');
			expect(browser.isVisible('//*[@id="mainContent"]/h1')).toBeTruthy();
			expect(browser.isVisible('//*[@id="mainContent"]')).toBeTruthy();
			expect(browser.isVisible('//*[@id="mainContent"]/a[1]')).toBeTruthy();
			expect(browser.getText()).toEqual('Home');
			expect(browser.isVisible('//*[@id="mainContent"]/a[2]')).toBeTruthy();
			expect(browser.getText()).toEqual('Log in');
		}

		verifySaveToWatchlist = function(): void {
			expect(browser.isVisible('//*[@id="Watchlist_reminders"]')).toBeTruthy();
			expect(browser.isVisible('//*[@id="ListingDetails"]/div[4]/div[1]/div[3]/div')).toBeTruthy();
			expect(browser.isVisible('//*[@id="DealerProfileBox_dealerbaseProfileBox"]')).toBeTruthy();
			expect(browser.isVisible('//*[@id="DealerProfileBox_ContactDealerButton"]')).toBeTruthy();
			expect(browser.getText()).toEqual('Email dealer');
			expect(browser.isVisible('//*[@id="VehicleInformationReport_VirBuyReport"]')).toBeTruthy();
			expect(browser.isVisible('//*[@id="BuyVirBtn"]')).toBeTruthy();
			expect(browser.getText()).toEqual('Buy report');
		}
	}
