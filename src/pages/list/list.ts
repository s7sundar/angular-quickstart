import {Component,OnInit} from '@angular/core';
import { Events  } from 'ionic-angular';
import { DataService } from './../data/data.service';

@Component({
	selector:'crisis-list',
	templateUrl:'list.html'
})
export class List implements OnInit {
	public users;
	constructor(private dataService:DataService, public events:Events) {}

	ngOnInit():void {
		this.events.subscribe('doSearch', (searchText)=> this.doSearch(searchText));
		this.initRecords();
	}

	initRecords():void {
		this.dataService.getDelayedAllUsersList().then(users=>this.users = users);
	}

	doSearch(searchText:string):void {		
		if(String(searchText).trim()!='') {
			this.dataService.filterUsers(searchText).then(users=>this.users = users);
		}
		else {
			this.initRecords();
		}		
	}

}