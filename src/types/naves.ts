export type NaveCategoria = "Crucero" | "Scout" | "Estacion" | "Carga";
export type EstadoOperacional = "Activo" | "Mantenimiento" | "Fuera de Servicio";

export interface Nave {
  id: number;
  nombre: string;
  idn: string;
  categoria: NaveCategoria;
  estado: EstadoOperacional;
  capacidadGente: number;
  rangoAñosLuz: number;
}

/* Filtrado */

export interface FilterState {
    searchQuery: string;
    selectedCategory: NaveCategoria | "All";
    onlyFavorites: boolean;
  }
  
  export interface HeaderProps {
    totalCount: number;
    favoritesCount: number;
  }
  
  export interface FilterPanelProps {
    filters: FilterState;
    onSearchChange: (value: string) => void;
    onCategoryChange: (category: NaveCategoria | "All") => void;
    onToggleFavorites: () => void;
    onResetFilters: () => void;
  }
  
  export interface VesselCardProps {
    vessel: Nave;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
  }
  
  export interface VesselListProps {
    vessels: Nave[];
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
  }