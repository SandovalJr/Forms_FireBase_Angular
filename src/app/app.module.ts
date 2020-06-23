import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { app_routes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VerUsuariosComponent,
    ActualizarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    app_routes,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
