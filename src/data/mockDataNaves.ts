import type { Nave } from "../types/naves.ts";

export const MOCK_VESSELS: Nave[] = [
  { id: 1, nombre: "Aegis Dawn", idn: "NV-01", categoria: "Crucero", estado: "Activo", capacidadGente: 120, rangoAñosLuz: 45 },
  { id: 2, nombre: "Kestrel Pike", idn: "NV-02", categoria: "Scout", estado: "Activo", capacidadGente: 6, rangoAñosLuz: 80 },
  { id: 3, nombre: "Helios Relay", idn: "ST-03", categoria: "Estacion", estado: "Activo", capacidadGente: 340, rangoAñosLuz: 0 },
  { id: 4, nombre: "Boreas Hauler", idn: "FR-04", categoria: "Carga", estado: "Mantenimiento", capacidadGente: 24, rangoAñosLuz: 30 },
  { id: 5, nombre: "Valkyrie Spear", idn: "NV-05", categoria: "Crucero", estado: "Activo", capacidadGente: 135, rangoAñosLuz: 50 },
  { id: 6, nombre: "Corvus Drift", idn: "NV-06", categoria: "Scout", estado: "Fuera de Servicio", capacidadGente: 4, rangoAñosLuz: 65 },
  { id: 7, nombre: "Tycho Dock", idn: "ST-07", categoria: "Estacion", estado: "Activo", capacidadGente: 500, rangoAñosLuz: 0 },
  { id: 8, nombre: "Atlas Bulk", idn: "FR-08", categoria: "Carga", estado: "Activo", capacidadGente: 30, rangoAñosLuz: 35 },
  { id: 9, nombre: "Orion Dart", idn: "NV-09", categoria: "Scout", estado: "Activo", capacidadGente: 5, rangoAñosLuz: 95 },
  { id: 10, nombre: "Hyperion Gate", idn: "ST-10", categoria: "Estacion", estado: "Mantenimiento", capacidadGente: 210, rangoAñosLuz: 0 },
  { id: 11, nombre: "Sovereign Arc", idn: "NV-11", categoria: "Crucero", estado: "Activo", capacidadGente: 160, rangoAñosLuz: 55 },
  { id: 12, nombre: "Midas Cargo", idn: "FR-12", categoria: "Carga", estado: "Activo", capacidadGente: 18, rangoAñosLuz: 28 },
];