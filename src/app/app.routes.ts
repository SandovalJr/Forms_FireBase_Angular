import { RouterModule, Routes } from '@angular/router';

// components
import { FormularioComponent } from '../app/components/formulario/formulario.component';
import { ActualizarUsuarioComponent } from '../app/components/actualizar-usuario/actualizar-usuario.component';
import { VerUsuariosComponent } from '../app/components/ver-usuarios/ver-usuarios.component';
import { Component } from '@angular/core';
const routes: Routes = [
  // comience en home
  { path: '', component: VerUsuariosComponent },
  { path: 'Actualizar/:id', component: ActualizarUsuarioComponent },
  { path: 'Registro', component: FormularioComponent },
];
export const app_routes = RouterModule.forRoot(routes);
