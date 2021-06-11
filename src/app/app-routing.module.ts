import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  {path: 'locations/:id', component: LocationsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent }
<<<<<<< HEAD
]
=======
]  

>>>>>>> develop
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
