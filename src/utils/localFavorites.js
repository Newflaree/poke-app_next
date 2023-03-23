const toggleFavorite = ( id = 0 ) => {
  if ( typeof window === 'undefined' ) return false;

  let favorites = localStorage.getItem('favorites');

  favorites = favorites 
    ? JSON.parse(favorites) 
    : [];

  ( favorites.includes( id ) )
    ? favorites = favorites.filter( pokeId => pokeId !== id )
    : favorites.push( id );

  localStorage.setItem( 'favorites', JSON.stringify( favorites ) );
}

const existsInFavorites = ( id = 0 ) => {
  if ( typeof window === 'undefined' ) return false;

  const  favorites = localStorage.getItem('favorites') || [];

  return favorites.includes( id );
}

const pokemons = () => {
  return JSON.parse( localStorage.getItem( 'favorites' ) || '[]' );
}

export default {
  existsInFavorites,
  pokemons,
  toggleFavorite
}
