import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public id: number;
  public guitarras: Array<any>;
  constructor(
    private _route: ActivatedRoute,
    private _router:Router
  ) {
    this.guitarras=[{id:16,modelo:"casiox99",marca:"casio",color:"negro",largo:16,
    ancho:45,peso:45,tipo:"acustica",numCuerdas:6,imagen:"https://m.media-amazon.com/images/I/81fzKTcDNEL._AC_SS350_.jpg"},
    {id:12,modelo:"Fujix99",marca:"casio",color:"negro",largo:16,
    ancho:45,peso:45,tipo:"acustica",numCuerdas:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShkotiWcu45WbVrGGBMYs089vEaSpGRvS1CIoLgD4aMBv9sE0y&usqp=CAU"}];
   }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
        this.id = params.id;
    });
  }


  redireccion(){
    this._router.navigate(['/modificar',1]);
  }

}
