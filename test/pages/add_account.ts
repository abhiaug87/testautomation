import { LoginPage } from '../pages/add_account_flow/login';
import { DashboardPage } from '../pages/add_account_flow/dashboard';
import { BankAccountPage } from '../pages/add_account_flow/bank_account';
import { SelectAccountPage } from '../pages/add_account_flow/select_account';

export class AddAccount {

	public loginPage = new LoginPage();
	public dashboardPage = new DashboardPage();
	public bankAccountPage = new BankAccountPage();
	public selectAccountPage = new SelectAccountPage();
	
}
