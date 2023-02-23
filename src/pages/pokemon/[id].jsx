import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts';

export const PokemonPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <MainLayout>
      <h1>Hola</h1>
    </MainLayout>
  );
}

export default PokemonPage;
