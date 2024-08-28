import '../styles/globals.css';
import { ViewProvider } from '../context/ViewContext';
import Home from '../components/Home';
import '../styles/globals.css';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <ViewProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    
  </ViewProvider>
  );
}

export default MyApp;