import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import {MatInputModule} from '@angular/material/input';

//=========================== Helpers =============================//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MatchComponent } from './components/match/match/match.component';
import { ListarComponent } from './components/articulos/listar/listar.component'
//import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatCardModule} from '@angular/material/card';
// import {MatTableModule} from '@angular/material/table';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
import {ResponseInterceptor } from './helpers/http.interceptor';
import { HomeComponent } from './components/home/home/home.component';
import {ServiceService} from './services/articulos/articulo.service';
import { InsertarComponent } from './components/articulos/insertar/insertar.component';
import { RegistroUsuarioComponent } from './components/auth/registro-usuario/registro-usuario.component';
import { EditarComponent } from './components/articulos/editar/editar.component';
import { ModalMensajeComponent } from './components/modals/modal-mensaje/modal-mensaje.component';
import { MatchAutorComponent } from './components/match/match-autor/match-autor/match-autor.component';
import { MatchEditorComponent } from './components/match/match-editor/match-editor/match-editor.component';
import { VerPerfilComponent } from './components/perfil/ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './components/perfil/editar-perfil/editar-perfil/editar-perfil.component';
import { PassComponent } from './components/perfil/cambiar-contra/pass/pass.component';
import { MisMatchsComponent } from './components/match/mis-matchs/mis-matchs/mis-matchs.component';
import { ContactoMatchComponent } from './components/match/contacto-match/contacto-match/contacto-match.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatchComponent,
    MatchAutorComponent,
    HomeComponent,
    ListarComponent,
    InsertarComponent,
    RegistroUsuarioComponent,
    EditarComponent,
    ModalMensajeComponent,
    MatchEditorComponent,
    VerPerfilComponent,
    EditarPerfilComponent,
    PassComponent,
    MisMatchsComponent,
    ContactoMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatMenuModule,
    // MatButtonModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatInputModule,
    // MatCardModule,
    // MatTableModule,
    // MatDialogModule,
    // MatRadioModule,
    // MatSelectModule
    HttpClientModule,
  ],
  providers: [FormBuilder
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  }, [ServiceService]],
  bootstrap: [AppComponent],

})
export class AppModule { }