import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LocationsComponent} from './locations/locations.component';
import {HomeComponent} from './home/home.component';
import {VehicleService} from './vehicle.service';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    HomeComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
