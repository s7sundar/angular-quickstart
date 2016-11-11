import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, NavController } from 'ionic-angular';
import { SalesService } from './../service/sales.service';

@Component({
	selector:'sales-item',
	providers:[SalesService],
	templateUrl:'sales-item.html'
})

export class SalesItem implements OnInit {

	public salesItemGroup:FormGroup;

	public sales_id:number;

	public oneSalesItemExist:boolean = false;

	public salesItemContainer = [];
	
	constructor(
		public navParams:NavParams, public navCtrl:NavController,
		private saleService:SalesService, public formBuilder:FormBuilder
	) {

	}

	ngOnInit():void {
		
		this.sales_id = this.navParams.get('sales_id');

		this.salesItemGroup = this.formBuilder.group({
			item_code: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
			qty: ['',Validators.compose([Validators.required])],
			rate: ['',Validators.compose([Validators.required, Validators.minLength(1)])],
			total: ['',Validators.compose([Validators.required, Validators.minLength(1)])],
			sales_id: [this.sales_id],
		});

		this.salesItemContainer = this.saleService.getItemSchema();


	}

	isValid():boolean {
		return this.oneSalesItemExist;
	}

	save():void {
		let oData = this.salesItemGroup.value;

	}


}