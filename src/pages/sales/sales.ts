import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalesService } from './../service/sales.service';
import { SalesEntry } from './sales-entry';

@Component({
	selector:'sales-page',
	providers:[SalesService],
	templateUrl:'sales.html'
})
export class Sales{
	constructor(public navCtrl:NavController, private saleService:SalesService) {}

	getSales(searchText:string|number) {

	}

	add() {
		console.info('ABC--> Sales clicked');
		this.navCtrl.push(SalesEntry,{
			sales_id:0,
			action:'Create'
		});
	}

	edit(sales_id:number) {
		console.info('ABC--> Edit Sales clicked');
		this.navCtrl.push(SalesEntry,{
			sales_id:sales_id,
			action:'Create'
		});
	}

	view(sales_id:number) {

	}

	print(sales_id:number) {
		
	}

}