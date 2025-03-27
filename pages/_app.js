import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head'; // Import Head from next/head

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Add favicon link */}
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;