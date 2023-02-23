import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts';

export const PokemonPage = ({ id, name }) => {
  const router = useRouter();
  console.log(router.query);

  return (
    <MainLayout>
      <h1>{ id } - { name }</h1>
    </MainLayout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: true
  }
}

export const getStaticProps = async (ctx) => {
  //const { data } = await pokeApi.get('/pokemon?limit=151')

  return {
    props: {
      id: 1,
      name: 'bullbasaur'
    }
  }
}

export default PokemonPage;
