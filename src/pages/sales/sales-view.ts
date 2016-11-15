import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';
import { SalesService } from './../service/sales.service';

@Component({
	selector:'sales-view',
	providers:[SalesService],
	templateUrl:'sales-view.html',
	styles:[`
		.no-padding {padding:0px !important;}		
	`]
})

export class SalesView implements OnInit{

	constructor(public navParams:NavParams, public saleService:SalesService) {}
	
	ngOnInit():void {
		let sales_id = this.navParams.get('sales_id');
		console.info('Sales view initialized --- '+ sales_id);

	}

}