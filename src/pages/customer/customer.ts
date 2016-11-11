import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CustomerService } from './../service/customer.service';
import { CustomerForm } from './customer-form';

@Component({
	selector:'customer-page',
	providers:[CustomerService],
	templateUrl:'customer.html'
})
export class Customer implements OnInit{
	constructor(
		public navCtrl:NavController, public menuCtrl:MenuController,
		private customerService:CustomerService
	) {}

	ngOnInit():void {
		this.menuCtrl.enable(true);
		console.info('ABC:---> Reached customer component');
	}

	getCustomer(searchText:string|number) {

	}

	add():void {
		console.info('ABC---> Add Clicked');
		this.navCtrl.push(CustomerForm,{customer_id:0, action:'Create'});
	}

	edit(customer_id):void {
		console.info('ABC---> Update Clicked');
		this.navCtrl.push(CustomerForm,{customer_id:customer_id, action:'Update'});
	}

	view(customer_id):void {
		console.info('ABC---> View Clicked');
		this.navCtrl.push(CustomerForm,{customer_id:customer_id, action:'View'});
	}

}