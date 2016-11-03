import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { Footer } from '../pages/footer/footer';
import { List } from '../pages/list/list';
import { DataService } from '../pages/data/data.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Search,
    List,
    Footer
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Search,    
    List,
    Footer
  ],
  providers: [DataService]
})
export class AppModule {}
