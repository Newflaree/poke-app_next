// Next UI
import { Grid } from '@nextui-org/react';
// API
import {pokeApi} from '@/api';
// Layouts
import { MainLayout } from '@/layouts';
// Components
import {PokemonCard} from '@/components/pokemon';

export default function Home({ pokemons }) {
  return (
    <MainLayout title='Listado de Pokemons'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( pokemon => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>
    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151')
  const pokemons = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}
