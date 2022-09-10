import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>markone</title>
        <meta name="description" content="markone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: 'lightgray'}}>
          <h1>準備中です...</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
