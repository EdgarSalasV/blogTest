import "../styles/globals.css";
import Page from '../views/page'

function MyApp({ Component, pageProps }) {
  return <Page>
      <Component {...pageProps} />
    </Page>
}

export default MyApp;
