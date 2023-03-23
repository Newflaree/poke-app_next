// Next
import NextLink from 'next/link';
// Next UI
import {
  Image,
  Spacer,
  Text,
  useTheme
} from '@nextui-org/react';

  export const Navbar = () => {
    const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray200.value
      }}
    >
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Icon de la app'
        width={70}
        height={70}
      />

      <NextLink
        href='/'
        passHref
      >
        <Text color='white' h3 transform='capitalize'>
          pokemon
        </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }}/>

      <NextLink
        href='/favorites'
        passHref
      >
        <Text color='white' h5 transform='capitalize'>
          favoritos
        </Text>
      </NextLink>
    </div>
  );
}
