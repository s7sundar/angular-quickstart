import { DataMethodsCollection } from './data-interface';
import { DataFormat } from './data-format';
import { DATA_JSON } from './data';

export class DataJSON implements DataMethodsCollection {
	private dataContainer;
	constructor() {
		this.init();
	}
	init():void {
		this.dataContainer = DATA_JSON;		
	}
	connect():void {

	}
	getUsersList(){
		return this.dataContainer;
    }
    filterUsers(searchText:string) {
		let users = [];		
		this.init();
		for(let user of this.dataContainer) {
			if(user.user_name.toLowerCase().indexOf(searchText) > -1) {
				users.push(user);
			}
		}		
    	return users;
    }    
}