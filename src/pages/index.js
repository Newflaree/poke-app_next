// Next UI
import { Button } from '@nextui-org/react';
// Layouts
import { MainLayout } from '@/layouts';

export default function Home() {
  return (
    <MainLayout title='Listado de Pokemons'>
      <Button
        color='gradient'
      >
        Hola Mundo
      </Button>
    </MainLayout>
  );
}
