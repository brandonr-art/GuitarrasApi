//importar modulos del router de angular

import { ModuleWithProviders } from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

//importar compontes a los cuales les hare una pagina, "seccion dinamica"

import {CrearComponent} from './components/crear/crear.component';
import {EliminarComponent} from './components/eliminar/eliminar.component';
import {ModificarComponent} from './components/modificar/modificar.component';
import {InicioComponent} from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';



//array de rutas


const appRoutes: Routes =[

    {path:'inicio',component:InicioComponent},
    {path:'crear',component:CrearComponent},
    {path:'eliminar',component:EliminarComponent},
    {path:'modificar',component:ModificarComponent},
    {path:'**',component:ErrorComponent}


];


//exportar el modulo de rutas



export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);


