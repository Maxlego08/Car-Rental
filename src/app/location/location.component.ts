import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehicleService} from '../vehicle.service';
import {IVehicle} from '../vehiclee';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public vehicle: IVehicle;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getVehicles().subscribe(data => {
      data.forEach(vehicle => {
        if (vehicle.id === id) {
          this.vehicle = vehicle;
        }
      });
    });
  }

}
