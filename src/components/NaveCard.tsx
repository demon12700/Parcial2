import type { VesselCardProps } from "../types/naves.ts";

export function VesselCard({
  vessel,
  isFavorite,
  onToggleFavorite,
}: VesselCardProps) {
  const handleFavoriteClick = (): void => {
    onToggleFavorite(vessel.id);
  };

  return (
    <article className="vessel-card">
      <h3>
        {vessel.nombre} ({vessel.idn})
      </h3>
      <p>Category: {vessel.categoria}</p>
      <p>Status: {vessel.estado}</p>
      <p>Crew: {vessel.capacidadGente} | Range: {vessel.rangoAñosLuz} ly</p>
      <button type="button" onClick={handleFavoriteClick}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </article>
  );
}