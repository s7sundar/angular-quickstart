import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	private loginData;

	constructor() {}

	isLoggedIn():boolean {
		return this.isPersistantKeyExist();
	}

	private isPersistantKeyExist():boolean {
		console.log('ABC:---> Check persistant key exist or not');		
		return true;
	}

	initData(loginData):void {
		this.loginData = loginData;
	}

	isValidLogin(loginData):boolean {
		this.initData(loginData);
		if(!this.verifyLoginCredentials()) {
			return false;
		}
		return true;
	}

	verifyLoginCredentials():boolean {
		console.info('ABC:--->implement the login verification logic here');
		return true;
	}

	updatePersistantKey():boolean {
		console.log('ABC:---> After successful login update db persistant key');
		return true;
	}

}