import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'; // keep your global styles too
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';




function MyApp({ Component, pageProps }) {
  return (
    <>
   
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
