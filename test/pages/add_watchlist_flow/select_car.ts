
export class SelectCarPage {

	selectingCar = function(): void {
	
		browser.waitForVisible('//*[@id="TopLevelCategory1"]', 10000);
		browser.click('//*[@id="TopLevelCategory1"]');
		browser.waitForVisible('//*[@id="SuperFeaturesContainer"]/a[4]/span[2]/span/strong[1]', 10000);
		browser.click('//*[@id="SuperFeaturesContainer"]/a[4]/span[2]/span/strong[1]');
	}

	verifySelectCarPage = function(): void  {
        
		expect(browser.isVisible('//*[@id="TopLevelCategory1"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Free shipping');
		expect(browser.isVisible('//*[@id="TopLevelCategory2"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Free shipping');
		expect(browser.isVisible('//*[@id="TopLevelCategory3"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Free shipping');
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl01_CategorySearchDiv"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Car parts & accessories');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts1_ctl01_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Car stereos');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts2_ctl01_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Specialist cars');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts3_ctl01_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Wrecked cars');
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Cars');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts1_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Trucks');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts2_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Boats & marine');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts3_ctl02_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Buses');
		expect(browser.isVisible('//*[@id="ExtraTopLevelCategories_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Motorbikes');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts1_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Caravans & motorhomes');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts2_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Trailers');
		expect(browser.isVisible('//*[@id="SecondLevelCategoryCounts3_ctl03_CategorySearch"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Horse floats');
		expect(browser.isVisible('//*[@id="listingTitleBarSelect"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Best match');
		expect(browser.isVisible('//*[@id="ListingsTitle_allnewused_all_link"]')).toBeTruthy();
		expect(browser.getText()).toEqual('All');
		expect(browser.isVisible('//*[@id="ListingsTitle_allnewused_new_link"]')).toBeTruthy();
		expect(browser.getText()).toEqual('New');
		expect(browser.isVisible('//*[@id="ListingsTitle_allnewused_used_link"]')).toBeTruthy();
		expect(browser.getText()).toEqual('Used');
		expect(browser.isVisible('//*[@id="ListingsTitle_onSaleOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_freeShippingOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_buyNowOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_payNowOption"]/label')).toBeTruthy();
		expect(browser.isVisible('//*[@id="ListingsTitle_afterpayOption"]/label')).toBeTruthy();
		
	}

	
}
