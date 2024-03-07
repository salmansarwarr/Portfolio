import '../styles/globals.css';
import type { AppProps } from 'next/app';
//TAILWIND
import 'tailwindcss/tailwind.css';
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>;
}

export default MyApp;