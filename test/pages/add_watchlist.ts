import { LoginPage } from '../pages/add_watchlist_flow/login';
import { LandingPage } from '../pages/add_watchlist_flow/landing';
import { SelectCarPage } from '../pages/add_watchlist_flow/select_car';
import { SaveToWatchlistPage } from '../pages/add_watchlist_flow/save_towatchlist';

export class AddCar {

	public loginPage = new LoginPage();
	public landingPage = new LandingPage();
	public selectCarPage = new SelectCarPage();
	public saveToWatchlistPage = new SaveToWatchlistPage();
	
}
