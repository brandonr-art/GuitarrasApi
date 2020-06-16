import { Component, OnInit } from '@angular/core';
import{GuitarraService} from '../../services/guitarra.service';
import{Guitarra} from '../../models/guitarra';
import { FormsModule, NgForm } from '@angular/forms';


declare var M: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[GuitarraService]
})
export class InicioComponent implements OnInit {
  public id: number;
  public guitarras: Array<any>;
  public guitarra:Guitarra[];
  public url: string;

  constructor(
    public guitarraService: GuitarraService
  ) {this.url ="http://localhost:3000/guitarras/";
}

ngOnInit() {
  this.getGuitarras();
    this.guitarraService.getGuitarras().subscribe(
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
  
  editGuitarra(form: NgForm){
    this.guitarraService.postGuitarra(form.value).subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'guardado'});
    })

  }
  
  addGuitarra(form: NgForm){
    this.guitarraService.postGuitarra(form.value).subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'guardado'});
    })
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
  deleteGuitarra(form: NgForm){
    this.guitarraService.postGuitarra(form.value).subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'guardado'});
    })
  }

}
