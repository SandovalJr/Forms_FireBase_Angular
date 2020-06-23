export interface Usuario {
  name: string;
  email: string;
  password: string;
  nameComplete: string;
  rfc: string;
  telefono: string;
  direccion: string;
  numeroCasa: number;
  esc?: number;
  piso?: number;
  letra?: number;
  cp: string;
  localidad: string;
  provincia: string;
  country: string;
}
