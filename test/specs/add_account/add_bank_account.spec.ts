import { AddAccount } from '../../pages/add_account';

const addAccount = new AddAccount();

describe('Add "ANZ NZ" account in my Organisation', () => {

	beforeAll(function () {
			
	browser.url('https://login.xero.com/');
	browser.pause(10000);
			
	 });

	describe('When I am redirected to the login page', () => {

		it('appears on the screen', () => {
			addAccount.loginPage.verifyLoginPage();
			addAccount.loginPage.enterLoginCredentials();
		});
	});

	describe('When I pass the username and password', () => {

		it('redirects me to the dashboard page', () => {
			addAccount.loginPage.submitCredentials();
			addAccount.dashboardPage.verifyDashboardPage();
		});
	});

	describe('When I click Bank Accounts from the Accounts list', () => {

		it('will open the add bank account page ', () => {
			addAccount.dashboardPage.navigateToBankAccountsPage();
			addAccount.bankAccountPage.verifyBankAccountPage();
		});
	});

	describe('When I click Add Bank Account button', () => {

		it('opens the select bank accounts page', () => {
			addAccount.bankAccountPage.selectBankAccount();
			addAccount.selectAccountPage.verifySelectAccountPage();
		});
	});

	describe('When I enter bank name in the search bar', () => {

		it('will show name of the bank searched for', () => {
			addAccount.selectAccountPage.addBankAccount();
		});
	});

	describe('When I have added ANZ bank to the list', () => {

		it('will add ANZ to the organzation', () => {
			addAccount.selectAccountPage.enterBankAccountDetails();
			addAccount.bankAccountPage.verifyBankAccountAdded();
		});
	});
});
