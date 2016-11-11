import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
	constructor() {}

	getCustomer(customer_id) {

	}

	getSchema() {
		let customer = {
				customer_id:'',
				customer_name:'',
				customer_code:'',
				mobile:'',
				tin_no:'',
				phone:'',
				email:'',
				address1:'',
				address2:'',
				city:'',
				pincode:'',
				sales_type:'sales'
		};
		return customer;
	}
}