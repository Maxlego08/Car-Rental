import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import {IVehicle} from '../vehiclee';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  public vehicles = [];

  // tslint:disable-next-line:variable-name
  constructor(private _vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this._vehicleService.getVehicles().subscribe(data => this.vehicles = data);
  }

  onVehicleClick(vehicle: IVehicle){
    console.log(vehicle);
  }

}
