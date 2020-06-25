import { Injectable } from '@angular/core';
import { UserDatabaseService } from './user-database.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidationErrors, FormControl } from '@angular/forms';
import { Usuario } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageErrorsService {
  constructor(private UserDB: UserDatabaseService) {}

  public messageError(errorRecibido: Object) {
    let message: string = '';

    if (errorRecibido == null) {
      return {
        error: false,
      };
    }

    switch (true) {
      case errorRecibido.hasOwnProperty('required'):
        message = 'Es necesario este campo';
        break;
      case errorRecibido.hasOwnProperty('onlyAlpha'):
        message = 'El campo tiene caracteres innecesarios';
        break;
      case errorRecibido.hasOwnProperty('minLength'):
        message = 'No cumple con la longitud requerida';
        break;
      case errorRecibido.hasOwnProperty('email'):
        message = 'No cumple con el formato de email';
        break;
      case errorRecibido.hasOwnProperty('password'):
        message = 'Debe de ser de almenos 8 caracteres y no se permite - ni _';
        break;
      case errorRecibido.hasOwnProperty('compare'):
        message = 'La contraseña no es igual a la anterior';
        break;
      case errorRecibido.hasOwnProperty('fullName'):
        message = 'El campo no acepta numeros';
        break;
      case errorRecibido.hasOwnProperty('rfc'):
        message = 'El formatoo del RFC no es valido';
        break;
      case errorRecibido.hasOwnProperty('telefono'):
        message = 'El numero telefonico no es valido';
        break;
      case errorRecibido.hasOwnProperty('maxLength'):
        message = 'La longitud maxima ha sido sobrepasada.';
        break;
      case errorRecibido.hasOwnProperty('maxNumber'):
        message = 'El numero ingresado es mayor a lo permitido';
        break;
      case errorRecibido.hasOwnProperty('numeric'):
        message = 'El numero tiene que ser positivo y sin decimales';
        break;
      case errorRecibido.hasOwnProperty('letra'):
        message = 'Solo puede ingresar dos letras';
        break;
      case errorRecibido.hasOwnProperty('cp'):
        message = 'El formato de CP no es aceptado';
        break;
      case errorRecibido.hasOwnProperty('UsuarioExistente'):
        message = 'El Usuario ya existe, seleccione otro';
        break;
      case errorRecibido.hasOwnProperty('CorreoExistente'):
        message = 'El Correo ya existe, seleccione otro';
        break;
    }

    return {
      message,
      error: true,
    };
  }

  public VerificarNombreUsuarioNoExista(
    control: FormControl
  ): Observable<ValidationErrors | null> {
    return this.UserDB.ObtenerNombreUsuario(control.value).pipe(
      map((valor) => {
        if (valor.docs.length > 0) {
          return {
            UsuarioExistente: true,
          };
        } else {
          return null;
        }
      })
    );
  }

  public VerificarCorreoNoExista(
    control: FormControl
  ): Observable<ValidationErrors | null> {
    return this.UserDB.ObtenerCorreo(control.value).pipe(
      map((valor) => {
        if (valor.docs.length > 0) {
          return {
            CorreoExistente: true,
          };
        } else {
          return null;
        }
      })
    );
  }


}
