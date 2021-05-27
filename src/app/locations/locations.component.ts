import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import {IVehicle} from '../vehiclee';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  public vehicles = [];

  // tslint:disable-next-line:variable-name
  constructor(private _vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._vehicleService.getVehicles().subscribe(data => this.vehicles = data);
  }

  onVehicleClick(vehicle: IVehicle) {
    const vehicleId = vehicle ? vehicle.id : null;
    this.router.navigate(['/locations', vehicleId], {relativeTo: this.route});
  }

}
