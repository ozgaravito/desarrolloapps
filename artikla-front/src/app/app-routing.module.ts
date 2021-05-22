import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { MatchComponent } from './components/match/match/match.component';
import { ListarComponent } from './components/articulos/listar/listar.component';
import { InsertarComponent } from './components/articulos/insertar/insertar.component';
import { RegistroUsuarioComponent } from './components/auth/registro-usuario/registro-usuario.component';
import { EditarComponent } from './components/articulos/editar/editar.component';
import { VerPerfilComponent } from './components/perfil/ver-perfil/ver-perfil.component';


const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent },
  { path: 'auth/login' , component: LoginComponent },
  { path: 'auth/registrar' , component: RegistroUsuarioComponent },
  { path: 'articulos/listar', component : ListarComponent},
  { path: 'articulos/insertar', component : InsertarComponent},
  { path: 'articulos/editar', component : EditarComponent},
  { path: 'perfil/ver-perfil', component : VerPerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
