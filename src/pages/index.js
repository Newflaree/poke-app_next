// Next UI
import { Button } from '@nextui-org/react';
// Layouts
import { MainLayout } from '@/layouts';

export default function Home( props ) {
  console.log({ props });

  return (
    <MainLayout title='Listado de Pokemons'>
      <Button
        color='gradient'
      >
        { props.name }
      </Button>
    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  console.log( 'Hola' );
  return {
    props: {
      name: 'Camilo'
    }
  }
}
