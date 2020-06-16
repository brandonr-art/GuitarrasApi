import { Component, OnInit } from '@angular/core';
import{GuitarraService} from '../../services/guitarra.service';
import{Guitarra} from '../../models/guitarra';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[GuitarraService]
})
export class InicioComponent implements OnInit {
  
  public guitarra:Guitarra[];

  constructor(
    public _guitarraService: GuitarraService
  ) { }

  ngOnInit(){
    this._guitarraService.getGuitarras().subscribe(
      response =>{
        if(response){
          this.guitarra = response.guitarra; 

          console.log(response);
        } else{
          console.log("Falla mortal");
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

}
