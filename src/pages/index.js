// Next UI
import { Card, Grid, Row, Text } from '@nextui-org/react';
// Layouts
import { MainLayout } from '@/layouts';
// API
import {pokeApi} from '@/api';

export default function Home({ pokemons }) {
  console.log( pokemons );
  return (
    <MainLayout title='Listado de Pokemons'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ({ id, name, img }) => (
            <Grid
              key={ id }
              xs={ 6 }
              sm={ 3 }
              md={ 2 }
              xl={ 1 }
            >
              <Card isHoverable isPressable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image
                    src={ img }
                    width='100%'
                    height={ 140 }
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{ name }</Text>
                    <Text>#{ id }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
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
