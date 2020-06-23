import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserDatabaseService {
  constructor(private afs: AngularFirestore) {}

  public GuardarUsuario() {
    const idUsuario = this.afs.createId();
    const nuevoUsuario = { id: idUsuario, nombre: 'Cristian' };

    // collecion es el nombre del objeto donde se guardan los datos
    this.afs.collection('Usuarios').add(nuevoUsuario);
  }
}
