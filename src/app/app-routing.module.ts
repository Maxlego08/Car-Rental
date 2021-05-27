import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationsComponent} from './locations/locations.component';
import {HomeComponent} from './home/home.component';
import {LocationComponent} from './location/location.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'locations', component: LocationsComponent,},
  {path: 'locations/:id', component: LocationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
