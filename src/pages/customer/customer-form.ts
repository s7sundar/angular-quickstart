import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams } from 'ionic-angular';
import { CustomerService } from './../service/customer.service';

@Component({
	selector:'customer-form',
	providers:[CustomerService],
	templateUrl:'customer-form.html'
})

export class CustomerForm implements OnInit {

	public cfg:FormGroup;

	public customer;

	public title;

	public bButton:boolean = true;

	constructor(
		public navParams:NavParams, private custoemrService:CustomerService,
		private formBuilder:FormBuilder
	) {}

	ngOnInit():void {
		
		this.customer = this.custoemrService.getSchema();
		let action = this.navParams.get('action');
		let customer_id:number = this.navParams.get('customer_id');
		this.title = action+' Customer';
		if(customer_id > 0) {			
			this.customer = this.custoemrService.getCustomer(customer_id);
		}

		this.cfg = this.formBuilder.group({
			customer_name: [this.customer.customer_name,Validators.compose([Validators.required, Validators.minLength(3)])],
			customer_code: [this.customer.customer_code,Validators.compose([Validators.required, Validators.minLength(3)])],
			mobile: [this.customer.mobile,Validators.compose([Validators.required, Validators.minLength(3)])],
			tin_no: [this.customer.tin_no,Validators.compose([Validators.required, Validators.minLength(3)])],			
			phone: [this.customer.phone,Validators.compose([Validators.required, Validators.minLength(3)])],
			email: [this.customer.email,Validators.compose([Validators.required, Validators.minLength(3)])],
			address1: [this.customer.address1,Validators.compose([Validators.required, Validators.minLength(3)])],
			address2: [this.customer.address2,Validators.compose([Validators.required, Validators.minLength(3)])],
			city: [this.customer.city,Validators.compose([Validators.required, Validators.minLength(3)])],
			pincode: [this.customer.pincode,Validators.compose([Validators.required, Validators.minLength(3)])],
			sales_type: [this.customer.sales_type],
			customer_id: [this.customer.customer_id]
		});

		if(action=='View') {
			this.bButton = false;
		}
		
	}

	save() {

	}
}