import { AddCar } from '../../pages/add_watchlist';

const addCar = new AddCar();

describe('Add a car to my watchlist', () => {

	beforeAll(function () {
			
	browser.url('https://www.trademe.co.nz/');
	browser.pause(10000);
			
	 });

	describe('When I am redirected to the login page', () => {

		it('appears on the screen', () => {
			addCar.loginPage.verifyLoginPage();
			addCar.loginPage.enterLoginCredentials();
			addCar.loginPage.submitCredentials();
		});
	});

	describe('When I pass the username and password', () => {

		it('redirects me to the landing page', () => {
			addCar.landingPage.navigateToLandingPage();
			addCar.landingPage.verifyLandingPage();
			});
	});

	describe('When I enter search criteria in the search bar', () => {

		it('will open the page to select a car ', () => {
			addCar.selectCarPage.selectingCar();
			addCar.selectCarPage.verifySelectCarPage();
		});
	});

	describe('When I select the car ', () => {

		it('opens the add to watchlist page', () => {
			addCar.selectCarPage.selectingCar();
			addCar.selectCarPage.verifySelectCarPage();
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
