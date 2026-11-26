import { MOCK_VESSELS } from "./data/mockDataNaves.ts";
import { useVesselFilters } from "./hooks/usoNaveFiltros.ts";
import { Header } from "./components/Header";
import { FilterPanel } from "./components/FilterPanel";
import { VesselList } from "./components/naveList.tsx";

export function App() {
  const {
    filteredVessels,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    onlyFavorites,
    setOnlyFavorites,
    favoriteIds,
    handleToggleFavorite,
    handleResetFilters,
  } = useVesselFilters(MOCK_VESSELS);

  return (
    <div className="app-container">
      <Header
        totalCount={filteredVessels.length}
        favoritesCount={favoriteIds.length}
      />
      <FilterPanel
        filters={{ searchQuery, selectedCategory, onlyFavorites }}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onToggleFavorites={(): void => setOnlyFavorites((prev: boolean): boolean => !prev)}
        onResetFilters={handleResetFilters}
      />
      <VesselList
        vessels={filteredVessels}
        favoriteIds={favoriteIds}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;