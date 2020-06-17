import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { Guitarra } from 'src/app/models/guitarra';
import { FormsModule, NgForm } from '@angular/forms';
import {GuitarraService} from '../../services/guitarra.service';
declare var M: any;

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
  providers:[GuitarraService]
})
export class ModificarComponent implements OnInit {
  public id: number;
  public guitarras: Array<any>;
  public guitarra:Guitarra[];
  public url: string;
  constructor(
    public guitarraService: GuitarraService,
    private _route: ActivatedRoute,
    private _router:Router
  ) {
    /* this.guitarras=[{id:16,modelo:"casiox99",marca:"casio",color:"negro",largo:16,
    ancho:45,peso:45,tipo:"acustica",numCuerdas:6,imagen:"https://m.media-amazon.com/images/I/81fzKTcDNEL._AC_SS350_.jpg"},
    {id:12,modelo:"Fujix99",marca:"casio",color:"negro",largo:16,
    ancho:45,peso:45,tipo:"acustica",numCuerdas:6,imagen:"https://m.media-amazon.com/images/I/81fzKTcDNEL._AC_SS350_.jpg"}]; */

    this.url ="http://localhost:3000/guitarras/";

   }

  ngOnInit() {
    this.getGuitarras();
    this._route.params.subscribe((params:Params)=>{
        this.id = params.id;
    });
    
  }


  redireccion(){
    this._router.navigate(['/modificar',1]);
  }

  editGuitarra(guitarra:Guitarra){
    this.guitarraService.selectedGuitarra = guitarra;
  }
  
  addGuitarra(form: NgForm){
    if (form.value.id){
      this.guitarraService.putGuitarra(form.value)
      .subscribe(res =>{
        console.log("Actualizado")
      })  
        }else{
    
        this.guitarraService.postGuitarra(form.value).subscribe(res =>{
          console.log(form.value);
          this.resetForm(form);
          
               M.toast({html: 'guardado'});
               this.getGuitarras();
        });
        }
      }
  getGuitarras(){
    this.guitarraService.getGuitarras()
    .subscribe(res =>{
      this.guitarraService.guitarras = res as Guitarra[];
      console.log(res);
    })

  }
 

  resetForm(form?: NgForm){
      if(form){
      form.reset();
      this.guitarraService.selectedGuitarra = new Guitarra();
    }

  }
  
  deleteGuitarra(id : string){
    if(confirm("¿Estas seguro de eliminar esa Guitarra?")){
      this.guitarraService.deleteGuitarra(id).subscribe(res =>{
        this.getGuitarras();
        M.toast({html: 'Eliminado'});
      })
    }
    
  }

}
