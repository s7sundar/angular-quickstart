import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Login } from '../pages/login/login';
import { Customer } from '../pages/customer/customer';
import { CustomerForm } from '../pages/customer/customer-form';
import { Sales } from '../pages/sales/sales';
import { SalesEntry } from '../pages/sales/sales-entry';
import { SalesItem } from '../pages/sales/sales-item';
import { Receipt } from '../pages/receipt/receipt'; 

@NgModule({
  declarations: [
    MyApp,
    Login,
    Customer,
    CustomerForm,
    Sales,
    SalesEntry,
    SalesItem,
    Receipt
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Customer,
    CustomerForm,
    Sales,
    SalesEntry,
    SalesItem,
    Receipt
  ],
  providers: []
})
export class AppModule {}
