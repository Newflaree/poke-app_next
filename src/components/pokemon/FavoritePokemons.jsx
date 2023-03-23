import { Grid } from "@nextui-org/react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

export const FavoritePokemons = ({ favoritePokemons }) => {
  return (
    <Grid.Container
      gap={ 2 }
      direction='row'
      justify='flex-start'
    >
      {
        favoritePokemons.map( id => (
          <Grid
            xs={ 6 }
            sm={ 3 }
            md={ 2 }
            xl={ 1 }
            key={ id }
          >
            <FavoritePokemonCard id={ id } />
          </Grid>
        ))
      }
    </Grid.Container>
  );
}
