import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, NavController } from 'ionic-angular';
import { SalesService } from './../service/sales.service';
import { SalesItem } from './sales-item';

@Component({
	selector:'sales-entry',
	providers:[SalesService],
	templateUrl:'sales-entry.html'
})

export class SalesEntry implements OnInit {

	public title;

	public saleEntryGroup:FormGroup;

	private sales;

	constructor(
		public navParams:NavParams, public formBuilder:FormBuilder, 
		private saleService:SalesService, public navCtrl:NavController
	) {}

	ngOnInit():void {
		let action = this.navParams.get('action');
		let sales_id:number = this.navParams.get('sales_id');
		this.title = action+' Sales';
		this.sales = this.saleService.getSchema();
		if(sales_id>0) {
			this.sales = this.saleService.getSalesEntry(sales_id);
		}
		
		this.saleEntryGroup = this.formBuilder.group({
			sales_no: [this.sales.sales_no,Validators.compose([Validators.required, Validators.minLength(6)])],
			sales_date: [this.sales.sales_date,Validators.compose([Validators.required])],
			customer_code: [this.sales.customer_code,Validators.compose([Validators.required, Validators.minLength(3)])],
			outstanding_amt: [this.sales.outstanding_amt,Validators.compose([Validators.required, Validators.minLength(1)])],
			sales_id: [this.sales.sales_id],
		});

		this.initData();


	}

	initData():void {
		let oData = this.saleEntryGroup.value;
		console.error(oData.sales_no);
	} 

	save():void {
		let oData = this.saleEntryGroup.value;
		this.saleService.saveEntry(oData);
		let sales_id = this.saleService.getSalesId();
		this.navCtrl.push(SalesItem, {sales_id:sales_id});
	}

}