// React
import { useEffect, useState } from 'react';
// Components
import { FavoritePokemons } from '@/components/pokemon';
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
      {
        favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons favoritePokemons={ favoritePokemons } /> )
      }
      
    </MainLayout>
  );
}

export default FavoritesPage;
