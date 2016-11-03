import { Injectable } from '@angular/core';
import { DataJSON } from './data-json.service';
import { DataFormat } from './data-format';
//import { DataDB } from './data-db.service';
import { Config } from './../config/config';

@Injectable()
export class DataService {
	private driver:string;
	private config:Config;
	private handle;
	
	constructor() {
		//this.driver = config.driver;
		this.config = new Config();
		this.driver = this.config.driver;
		this.init();	
	}

	init():void {
		if(this.driver==='json') {
			this.handle = new DataJSON();
		}
		else {
			//this.handle = new DataDB();
		}

		this.handle.init();
	}

	getUsersList():Promise<DataFormat[]>{
		return Promise.resolve(this.handle.getUsersList());
	}
	
	//let the app load the template and then serve big content
	getDelayedAllUsersList():Promise<DataFormat[]> {
		return new Promise<DataFormat[]>(resolve=>
			setTimeout(resolve, 2000)).then(()=>this.getUsersList());
	}

	filterUsers(searchText:string):Promise<DataFormat[]> {
		return Promise.resolve(this.handle.filterUsers(searchText));
	}
}