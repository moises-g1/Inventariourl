export interface Usuario {
  nombre: string;
  edad: number;
  telefono: string;
  tipo_usuario: string;
  contrasenia: string;
}

export interface Producto {
  modelo: string;
  tipo: string;
  talla: string;
  color: string;
  cantidad: number;
  precio: number;
  descripcion: string;
  image: string;
}

export interface NuevoUsuario {
  id: number;
  usuario: string;
  contrasenia: string;
  admin: string;
}
