export interface Usuario {
  nickname: string;
  email: string;
  contrasena: string;
  nombreCompleto: string;
  RFC: string;
  telefono: string;
  direccion: string;
  numero: number;
  esc?: number;
  piso?: number;
  letra?: number;
  codigoPostal: string;
  localidad: string;
  provincia: string;
  pais: string;
}
