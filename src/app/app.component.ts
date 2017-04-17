import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Login } from '../pages/login/login';
import { LoginService } from '../pages/service/login.service';
import { Customer } from '../pages/customer/customer';
import { Sales } from '../pages/sales/sales';
import { Receipt } from '../pages/receipt/receipt'; 

@Component({
  templateUrl: 'app.html',
  providers:[LoginService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private loginService:LoginService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Customer', component: Customer },
      { title: 'Sales', component: Sales },
      { title: 'Receipt', component: Receipt }
    ];

  }

  initializeApp() {
    
    if(this.loginService.isLoggedIn()) {
      this.rootPage = Sales;
    }

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}