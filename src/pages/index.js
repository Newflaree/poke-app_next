// Layouts
import {pokeApi} from '@/api';
import { MainLayout } from '@/layouts';

export default function Home( props ) {

  return (
    <MainLayout title='Listado de Pokemons'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151')
  return {
    props: {
      pokemons: data.results
    }
  }
}
