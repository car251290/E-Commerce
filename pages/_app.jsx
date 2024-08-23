import '../styles/globals.css';
import { ViewProvider } from '../context/ViewContext';
import Home from '../components/Home';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <ViewProvider>
    <Component {...pageProps} />
  </ViewProvider>
  );
}

export default MyApp;