
export class SelectCarPage {

	selectingCar = function(): void {
	
		browser.waitForVisible('//*[@id="SuperFeaturesContainer"]/a[4]/span[2]/span/strong[1]', 5000);
		browser.click('//*[@id="SuperFeaturesContainer"]/a[4]/span[2]/span/strong[1]');
	}

	verifySelectCarPage = function(): void  {

		expect(browser.isVisible('//*[@id="TopLevelCategory2"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="TopLevelCategory3"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl01_CategorySearchDiv"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts1_ctl01_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts2_ctl01_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts3_ctl01_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts1_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts2_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts3_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts1_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts2_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts3_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl04_CategorySearch"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="listingTitleBarSelect"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_allnewused_all_link"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_allnewused_new_link"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_allnewused_used_link"]')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_onSaleOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_freeShippingOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_buyNowOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_payNowOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_afterpayOption"]/label')).toBeTruthy();
	}

	
}

