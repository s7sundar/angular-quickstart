import {Component} from '@angular/core';
import { Events  } from 'ionic-angular';

@Component({
	selector:"crisis-search",
	templateUrl:"search.html"
})
export class Search {

    public users;

	constructor(public events:Events) { }

    getItems(searchText: string, event:KeyboardEvent) {       
        this.events.publish('doSearch', searchText);
	}
}