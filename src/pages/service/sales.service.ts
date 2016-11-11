import {Injectable} from '@angular/core';

@Injectable()
export class SalesService {
	constructor() {}

	getSalesEntry(sales_id) {

	}

	getSchema() {
		let salesEntry = {
			sales_no:this.getNextSalesNo(),
			sales_date:'',			
			customer_code:'',
			outstanding_amt:0.00,
			sales_id:''
		};
		return salesEntry;
	}

	getItemSchema() {
		let salesItem = [
			{
				sales_item_id:'1',
				sales_id:'1',
				item_code:'example',
				qty:100,
				rate:100,
				total:10000,
			}
		]

		return salesItem;
	}

	getNextSalesNo():string {
		return 'APP01-'+Math.random()
	}

	getRandomNumber():number {
		let min = 1;
		let max = 999999999;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	getSalesId():number {
		return 1;
	}


	saveEntry(oData):void {
		console.log(oData);
	}

	updateEntry(oData):void {

	}

	saveItem(oData):void {

	}

	deleteItem(sales_item_id):void {
		
	}

	updateSales(oData, sales_id:number):void {

	}

}