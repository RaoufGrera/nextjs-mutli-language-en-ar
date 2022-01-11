import '../styles/globals.css'
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    },[dir]);


  return(<>
    <Head>
      <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
  </Head>
  <div className="container">

  <Component {...pageProps} />

  </div>
  </>);
}
export default appWithTranslation(MyApp);

