// Next UI
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Text
} from '@nextui-org/react';
// API
import { pokeApi } from '@/api';
// Layouts
import { MainLayout } from '@/layouts';

/* =====================
 *        Client
 * =====================*/
const PokemonPage = ({ pokemon }) => {
  console.log( pokemon );

  return (
    <MainLayout>
      <Grid.Container
        css={{
          marginTop: '5px'
        }}
        gap={ 2 }
      >
        <Grid
          xs={ 12 }
          sm={ 4 }
        >
          <Card
            isHoverable
            css={{
              padding: '30px',
            }}
          >
            <Card.Body>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || '' }
                alt={ pokemon.name }
                width= '100%'
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid
          xs={ 12 }
          sm={ 8 }
        >
          <Card>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Text
                h1
                transform='capitalize'
              >
                { pokemon.name }
              </Text>

              <Button
                color='gradient'
                ghost
              >
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text
                size={ 30 }
              >
                Sprites
              </Text>
              <Container
                display='flex'
                direction='row'
              >
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
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
