// Router
import { useRouter } from 'next/router';
// Layouts
import { MainLayout } from '@/layouts';
import {pokeApi} from '@/api';

/* =====================
 *        Client
 * =====================*/
export const PokemonPage = ({ pokemon }) => {
  console.log( pokemon );

  return (
    <MainLayout>
      <h1>{ pokemon.name }</h1>
    </MainLayout>
  );
}

/* =====================
 *        Server
 * =====================*/
export const getStaticPaths = async () => {
  const poke151 = [ ...Array(151) ].map( ( value, index ) => `${ index + 1 }`);

  return {
    paths: poke151.map( id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const { data } = await pokeApi.get( `/pokemon/${ id }` )

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;
