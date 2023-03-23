// React
import { useEffect, useState } from 'react';
// Components
import { NoFavorites } from '@/components/ui';
// Main Layout
import { MainLayout } from '@/layouts';
// Utils
import { localFavorites } from '@/utils';

const FavoritesPage = () => {

  const [ favoritePokemons, setFavoritePokemons ] = useState( [] );

  useEffect( () => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, [] );

  return (
    <MainLayout
      title='Pokemons - Favoritos'
    >
      <NoFavorites />
    </MainLayout>
  );
}

export default FavoritesPage;
