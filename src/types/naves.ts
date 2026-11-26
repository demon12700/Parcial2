export type NaveCategoria = "Crucero" | "Scout" | "Estacion" | "Carga";
export type EstadoOperacional = "Activo" | "Mantenimiento" | "Fuero de Servicio";

export interface Nave {
  id: number;
  nombre: string;
  idn: string;
  categoria: NaveCategoria;
  estado: EstadoOperacional;
  capacidadGente: number;
  rangoAñosLuz: number;
}