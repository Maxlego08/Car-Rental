import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IVehicle} from './vehiclee';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/api/v1/vehicles';

  constructor(private http: HttpClient) {
  }

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(this._url);
  }
}
