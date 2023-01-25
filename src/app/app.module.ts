import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{ routing, appRoutingProviders} from './app.routing' ;
import {HttpClientModule} from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { PresentacionComponent } from './Components/presentacion/presentacion.component';
import { GaleriaComponent } from './Components/galeria/galeria.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    
    AppComponent,
    ContactoComponent,
    PresentacionComponent,
    GaleriaComponent,
    ProductosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
