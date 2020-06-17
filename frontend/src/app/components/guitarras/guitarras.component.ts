import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {GuitarraService} from '../../services/guitarra.service';
import { Guitarra } from 'src/app/models/guitarra';

declare var M: any;

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.css'],
  providers: [GuitarraService]
})
export class GuitarrasComponent implements OnInit {
  
  constructor(public guitarraService: GuitarraService) {
    
   }
    
  ngOnInit(){
    this.getGuitarras();
  }
  editGuitarra(form: NgForm){
    this.guitarraService.postGuitarra(form.value).subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'guardado'});
    })

  }
  
  addGuitarra(form: NgForm){
    this.guitarraService.postGuitarra(form.value).subscribe(res =>{
      console.log(form.value);
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
