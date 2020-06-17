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
  public URL_API = 'http://localhost:3000/';

  constructor(private http: HttpClient) { 
    this.selectedGuitarra = new Guitarra();
  }

  getGuitarras():Observable<any>{
    return this.http.get(this.URL_API+'guitarras');
  }
  postGuitarra(Guitarra: Guitarra){
    return this.http.post('http://localhost:3000/'+'guitarras/', Guitarra);
  }
  putGuitarra(guitarra: Guitarra){
    return this.http.put(this.URL_API + '/${guitarra._id}', guitarra);
  }
  deleteGuitarra(_id: string){
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
