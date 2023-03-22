const toggleFavorite = ( id = 0 ) => {
  let favorites = localStorage.getItem('favorites');

  favorites = favorites 
    ? JSON.parse(favorites) 
    : [];

  ( favorites.includes( id ) )
    ? favorites = favorites.filter( pokeId => pokeId !== id )
    : favorites.push( id );

  localStorage.setItem( 'favorites', JSON.stringify( favorites ) );
}

export default {
  toggleFavorite
}
