// Layouts
import {pokeApi} from '@/api';
import { MainLayout } from '@/layouts';

export default function Home({ pokemons }) {
  console.log( pokemons );
  return (
    <MainLayout title='Listado de Pokemons'>
      <ul>
        {
          pokemons.map( ({ id, name }) => (
            <li key={ id }>
              #{ id } - { name }
            </li>
          ))
        }
      </ul>
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
