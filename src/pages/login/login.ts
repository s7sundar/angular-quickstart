import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Nav,MenuController} from 'ionic-angular';
import { LoginService } from './../service/login.service';
import { Customer } from './../customer/customer';

@Component({
	selector:'login-page',
	templateUrl:'login.html',
	providers:[LoginService],
	styles:[`
		.text-center{text-align: center;}
		.padTop{ padding-top:100px; border:1px solid #ccc;}
		.small-font{ font-size:1rem !important; }
	`]
})

export class Login implements OnInit {
	
	public loginForm:FormGroup;
	public emailPattern;
	private loginData;

	constructor(
		public menuCtrl:MenuController,public nav:Nav,
		public formBuilder:FormBuilder, private loginService:LoginService		
	) {}

	ngOnInit():void {		
		this.menuCtrl.enable(false);
		this.emailPattern = /^\\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		this.loginForm = this.formBuilder.group({
			vechicle_code: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			email:['', Validators.compose([Validators.required])],
			password:['', Validators.compose([Validators.required, Validators.minLength(6)])],
		});
		/*if(this.loginService.isLoggedIn()) {
			this.gotoCustomer();
		}*/
	}

	signIn():void {
		this.loginData = this.loginForm.value;
		if(this.loginService.isValidLogin(this.loginData)) {
			this.gotoCustomer();
		}
	}

	gotoCustomer():void {
		console.info('ABC:--->Customer page navigation is called');
		this.menuCtrl.enable(true);
		this.nav.setRoot(Customer);
	}
}
