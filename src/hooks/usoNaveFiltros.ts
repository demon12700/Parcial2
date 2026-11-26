import type { Nave, NaveCategoria, FilterState } from "../types/naves.ts";

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


/* Filtrado por si Favorito */

export function matchesFavorites(
  vessel: Nave,
  onlyFavorites: boolean,
  favoriteIds: number[]
): boolean {
  if (!onlyFavorites) return true;
  return favoriteIds.includes(vessel.id);
}

/* Filtrado principal */

export function filterVessels(
    vessels: Nave[],
    filters: FilterState,
    favoriteIds: number[]
  ): Nave[] {
    return vessels.filter(
      (vessel: Nave): boolean =>
        matchesSearchQuery(vessel, filters.searchQuery) &&
        matchesCategory(vessel, filters.selectedCategory) &&
        matchesFavorites(vessel, filters.onlyFavorites, favoriteIds)
    );
  }

  /* toggle Favorito en lista */

export function toggleIdInList(ids: number[], targetId: number): number[] {
    const exists: boolean = ids.includes(targetId);
    if (exists) {
        return ids.filter((id: number): boolean => id !== targetId);
    }
    return [...ids, targetId];
  }