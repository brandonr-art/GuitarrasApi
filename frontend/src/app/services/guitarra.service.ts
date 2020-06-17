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
  public URL_API = 'http://localhost:3000';
  public URL_API_Remot = 'https://guitarras.herokuapp.com';

  constructor(private http: HttpClient) { 
    this.selectedGuitarra = new Guitarra();
  }

  getGuitarras():Observable<any>{
    return this.http.get(this.URL_API+'/guitarras' || this.URL_API_Remot+'/guitarras');
  }
  postGuitarra(Guitarra: Guitarra){
    return this.http.post('http://localhost:3000/'+'guitarras/' || this.URL_API_Remot +'/guitarras/', Guitarra);
  }
  putGuitarra(guitarra: Guitarra){
    /* return this.http.put(this.URL_API + '/guitarras/'+'{guitarra._id}', guitarra); */

    return this.http.put(this.URL_API + '/guitarras' +`/${guitarra.id}` || this.URL_API_Remot + '/guitarras' +`/${guitarra.id}`, guitarra);

  }
  deleteGuitarra(id: string){
    return this.http.delete(this.URL_API + '/guitarras' + `/${id}` || this.URL_API_Remot + '/guitarras' + `/${id}`)
  }
}