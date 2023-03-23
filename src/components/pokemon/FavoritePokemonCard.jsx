import { useRouter } from "next/router";
import { Card } from "@nextui-org/react";

export const FavoritePokemonCard = ({ id }) => {
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${ id }`);
  }
  return (
    <Card
      isHoverable
      isPressable
      css={{
        padding: 10
      }}
    >
      <Card.Image 
        src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg` }
        alt='NoImage'
        width='100%'
        height={ 140 }
        onClick={ onPokemonClick }
      />
    </Card>
  );
}
