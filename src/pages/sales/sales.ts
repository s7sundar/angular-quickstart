import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Printer, PrintOptions} from 'ionic-native';
import { SalesService } from './../service/sales.service';
import { SalesEntry } from './sales-entry';
import { SalesView } from './sales-view';

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
			action:'Update'
		});
	}

	view(sales_id:number) {
		console.info('ABC ---> sales view is clicked');

		this.navCtrl.push(SalesView, {
			sales_id:sales_id,
			action:'view'
		});

	}

	print(sales_id:number) {
		console.info('ABC ---> Print view is clicked');
		if(Printer.isAvailable()) {
			console.info('printer available');

			//print using pdf on ubuntu
			//http://ionicframework.com/docs/v2/native/printer/
		}
		else {
			console.info('printer not available');
		}
	}

}