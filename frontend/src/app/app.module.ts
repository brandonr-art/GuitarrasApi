import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GuitarraService} from './services/guitarra.service';
import { FormsModule } from '@angular/forms';
import {GuitarrasComponent} from './components/guitarras/guitarras.component';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ErrorComponent } from './components/error/error.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    GuitarrasComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent,
    ErrorComponent,
    SliderComponent,
    SidebarComponent,
    ArticleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders,GuitarraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
