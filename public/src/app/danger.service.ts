import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DangerService {

  constructor(private _http: HttpClient) { }

  getAllDangers(){
    return this._http.get('/api/dangers');
  }

  getOneDanger(){
    return this._http.get('/api/dangers/:id');
  }

  createDanger(newDanger){
    console.log(newDanger);
    return this._http.post('/api/dangers/create',newDanger);
  }

  updateDanger(updateDanger){
    return this._http.put(`/api/dangers/update/${updateDanger._id}`, updateDanger);
  }

  destroyDanger(id){
    return this._http.delete(`/api/dangers/destroy/${id}`);
  }
}
