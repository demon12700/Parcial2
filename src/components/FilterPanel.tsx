import type { ChangeEvent } from "react";
import type { FilterPanelProps, NaveCategoria } from "../types/naves.ts";

const CATEGORIES: Array<NaveCategoria | "All"> = [
  "All",
  "Crucero",
  "Scout",
  "Estacion",
  "Carga",
];

export function FilterPanel({
  filters,
  onSearchChange,
  onCategoryChange,
  onToggleFavorites,
  onResetFilters,
}: FilterPanelProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onSearchChange(event.target.value);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onCategoryChange(event.target.value as NaveCategoria | "All");
  };

  return (
    <section className="filter-panel">
      <input
        type="text"
        value={filters.searchQuery}
        onChange={handleInputChange}
        placeholder="Search by name or code..."
      />
      <select value={filters.selectedCategory} onChange={handleSelectChange}>
        {CATEGORIES.map((category: NaveCategoria | "All") => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="button" onClick={onToggleFavorites}>
        {filters.onlyFavorites ? "All Vessels" : "Only Favorites"}
      </button>
      <button type="button" onClick={onResetFilters}>
        Reset
      </button>
    </section>
  );
}