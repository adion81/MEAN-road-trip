import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http: HttpClient) { }
  getAllCities(){
    return this._http.get('/api/cities');
  }

  getOneCity(id){
    return this._http.get(`/api/cities/${id}`);
  }

  createCity(newCity){
    return this._http.post('/api/cities/create',newCity);
  }

  updateCity(updateCity){
    return this._http.put(`/api/cities/update/${updateCity._id}`,updateCity);
  }

  destroyCity(id){
    return this._http.delete(`/api/cities/destroy/${id}`);
  }
}
