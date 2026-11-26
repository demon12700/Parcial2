import type { Nave, NaveCategoria } from "../types/naves.ts";

/* Filtrado por Nombre*/
export function matchesSearchQuery(vessel: Nave, query: string): boolean {
  const normalized: string = query.trim().toLowerCase();
  if (normalized === "") return true;
  return (
    vessel.nombre.toLowerCase().includes(normalized) ||
    vessel.idn.toLowerCase().includes(normalized)
  );
}

/* Filtrado por Categoria */

export function matchesCategory(
    vessel: Nave,
    selectedCategory: NaveCategoria | "All"
  ): boolean {
    if (selectedCategory === "All") return true;
    return vessel.categoria === selectedCategory;
  }