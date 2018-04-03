import { AddCar } from '../../pages/add_watchlist';

const addCar = new AddCar();

describe('Add a car to my watchlist', () => {

	beforeAll(function () {
			
	browser.url('https://www.trademe.co.nz/');
	browser.pause(5000);
			
	 });

	describe('When I am redirected to the login page', () => {

		it('appears on the screen', () => {
			addCar.loginPage.verifyMainPage();
			addCar.loginPage.enterLoginCredentials();
			addCar.loginPage.verifyLoginPage();
			addCar.loginPage.submitCredentials();
		});
	});

	describe('When I enter string in the search field', () => {

		it('will narrow down the search results with options ', () => {
			addCar.landingPage.verifyLandingPage();
			addCar.landingPage.navigateToLandingPage();
		});
	});

	describe('When I enter search criteria in the search bar', () => {

		it('will open the page to select a car ', () => {
			addCar.selectCarPage.verifySelectCarPage();
			addCar.selectCarPage.selectingCar();
		});
	});

	describe('When I add the car to my watchlist', () => {

		it('will add the car to my list', () => {
			addCar.saveToWatchlistPage.SaveToWatchlist();
			addCar.saveToWatchlistPage.verifySaveToWatchlist();
		});
	});

	describe('When I click on the logout button', () => {

		it('will log me out of my account', () => {
			addCar.saveToWatchlistPage.Logout();
			addCar.saveToWatchlistPage.verifyLogout();
		});
	});
});
