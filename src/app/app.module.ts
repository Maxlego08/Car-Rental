import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LocationsComponent} from './locations/locations.component';
import {HomeComponent} from './home/home.component';
import {VehicleService} from './vehicle.service';
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
=======
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
=======
import { LocationComponent } from './location/location.component';
>>>>>>> 6387b24db59a7954de49f2f9011bd83e71e3d51e
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    HomeComponent,
<<<<<<< HEAD
    ContactComponent,
=======
<<<<<<< HEAD
    LoginComponent,
ContactComponent,
=======
    LocationComponent,
>>>>>>> 6387b24db59a7954de49f2f9011bd83e71e3d51e
>>>>>>> develop
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
