import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector:'receipt-page',
	templateUrl:'receipt.html'
})
export class Receipt{
	constructor(public navCtrl:NavController) {}
}