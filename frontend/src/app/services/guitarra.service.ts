import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Guitarra}  from '../models/guitarra';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class GuitarraService {

  selectedGuitarra: Guitarra;
  guitarras: Guitarra[];
  

  constructor(private http: HttpClient) { 
    this.selectedGuitarra = new Guitarra();
  }

  getGuitarras():Observable<any>{
    return this.http.get('/guitarras');
  }
  postGuitarra(Guitarra: Guitarra){
    return this.http.post('/guitarras/', Guitarra);
  }
  putGuitarra(guitarra: Guitarra){
    /* return this.http.put('/guitarras/'+'{guitarra.id}', guitarra); */

    return this.http.put('/guitarras/' +`${guitarra.id}`, guitarra);
   
  }
  deleteGuitarra(id: string){
    return this.http.delete('/guitarras' + `/${id}`)
  }
}
