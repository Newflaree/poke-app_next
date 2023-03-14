// Next.js
import { useRouter } from 'next/router';
// Next UI
import {
  Card,
  Grid,
  Row,
  Text
} from '@nextui-org/react';

export const PokemonCard = ({ pokemon }) => {
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${ pokemon.id }`);
  }

  return (
    <Grid
      xs={ 6 }
      sm={ 3 }
      md={ 2 }
      xl={ 1 }
    >
      <Card
        onClick={ onPokemonClick }
        isHoverable
        isPressable
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={ pokemon.img }
            width='100%'
            height={ 140 }
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{ pokemon.name }</Text>
            <Text>#{ pokemon.id }</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
