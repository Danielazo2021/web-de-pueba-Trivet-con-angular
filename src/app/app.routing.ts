// importsr los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
//import { Routes, RouterModule } from "@angular/router";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes
import { ContactoComponent } from "./Components/contacto/contacto.component";
import { HomeComponent } from "./Components/home/home.component";
import { GaleriaComponent } from "./Components/galeria/galeria.component";
import { PresentacionComponent } from "./Components/presentacion/presentacion.component";
import { ProductosComponent } from "./Components/productos/productos.component";
import { AppComponent } from "./app.component";
//

// Array de rutas

const appRoutes: Routes= [
    {path:'a', component: AppComponent},
   {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'galeria', component: GaleriaComponent},
    {path:'presentacion', component: PresentacionComponent},
    {path:'productos', component: ProductosComponent},
    {path:'**', component: HomeComponent}  

];

// Exportar el modulo del router
export const appRoutingProviders: any[]= [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing= RouterModule.forRoot(appRoutes);
