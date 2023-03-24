import Head from 'next/head';
// Components
import { Navbar } from '@/components/ui';

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name='author' content='Camilo López' />
        <meta name='description' content={ `Información sobre el pokemon ${ title }` } />
        <meta name='keywords' content={ `${ title }, pokemon, pokedex` } />

        <meta property="og:title" content={ `Información sobre ${ title }` } />
        <meta property="og:description" content={ `Esta es la página sobre ${ title }` } />
        <meta property="og:image" content={ `${ origin }/img/banner.png` } />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  );
}
