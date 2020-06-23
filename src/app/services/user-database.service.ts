import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../interface/user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserDatabaseService {
  constructor(private afs: AngularFirestore) {}

  public GuardarUsuario(Usuario: Usuario) {
    const idUsuario = this.afs.createId();
    const nuevoUsuario = { ...Usuario, id: idUsuario };

    // collecion es el nombre del objeto donde se guardan los datos
    this.afs.collection('Usuarios').add(nuevoUsuario);
  }

  public ObtenerUsuarios() {
    // para retornar todos los usuarios
    return this.afs.collection('Usuarios').valueChanges();
  }

  public ObtenerUsuarioActualizar(idUsuario: string) {
    return this.afs.collection('Usuarios', (ref) => ref.where('id', '==', idUsuario)).valueChanges();
  }
}
