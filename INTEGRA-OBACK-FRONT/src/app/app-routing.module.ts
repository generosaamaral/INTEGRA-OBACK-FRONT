import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {LoginComponent} from './login/login.component';
import {ListagemComponent} from './listagem/listagem.component';
import {LogoutComponent} from './logout/logout.component';


const routes: Routes = [
{path: '' , component: InicioComponent},
{path:'login' , component: LoginComponent},
{path:'listagem', component: ListagemComponent},
{path:'logout', component: LogoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
