import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Guitarra}  from '../models/guitarra';

@Injectable({
  providedIn: 'root'
})
export  class GuitarraService {

  selectedGuitarra: Guitarra;
  guitarras: Guitarra[];
  readonly URL_API = 'http://localhost:3000/guitarras';

  constructor(private http: HttpClient) { 
    this.selectedGuitarra = new Guitarra();
  }

  getGuitarras(){
    return this.http.get('');
  }
  postGuitarra(Guitarra: Guitarra){
    return this.http.post(this.URL_API, Guitarra);
  }
  putGuitarra(guitarra: Guitarra){
    return this.http.put(this.URL_API + '/${guitarra._id}', guitarra);
  }
  deleteGuitarra(_id: string){
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
