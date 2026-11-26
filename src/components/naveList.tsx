import type { Nave, VesselListProps } from "../types/naves.ts";
import { VesselCard } from "./NaveCard.tsx";

export function VesselList({
  vessels,
  favoriteIds,
  onToggleFavorite,
}: VesselListProps) {
  if (vessels.length === 0) {
    return (
      <p className="empty-state">
        Ninguna nave coincide con el filtro asignado.
      </p>
    );
  }

  return (
    <main className="vessel-grid">
      {vessels.map((nave: Nave) => (
        <VesselCard
          key={nave.id}
          vessel={nave}
          isFavorite={favoriteIds.includes(nave.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </main>
  );
}