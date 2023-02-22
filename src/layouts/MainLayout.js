import Head from 'next/head';

export const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name='author' content='Camilo López' />
        <meta name='description' content={ `Información sobre el pokemon ${ title }` } />
        <meta name='keywords' content={ `${ title }, pokemon, pokedex` } />
      </Head>

      { /* Navbar */ }

      <main>
        { children }
      </main>
    </>
  );
}
