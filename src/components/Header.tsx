import type { HeaderProps } from "../types/naves.ts";

export function Header({ totalCount, favoritesCount }: HeaderProps) {
  return (
    <header className="header">
      <h1>Orbital Catalog</h1>
      <p>
        Showing {totalCount} vessels | Favorites: {favoritesCount}
      </p>
    </header>
  );
}