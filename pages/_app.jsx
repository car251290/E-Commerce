import '../styles/globals.css';
import { ViewProvider,useView } from '../context/ViewContext';
import Home from '../components/Home';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { use } from 'react';
function MyApp({ Component, pageProps }) {
  return (
    <ViewProvider>
      <Layout>
      <Component {...pageProps} />
      <ConditionalViewRendering/>
      </Layout>
  </ViewProvider>
  );
}


const ConditionalViewRendering = () => {
  const {view}  = useView();
  return (
    <>
    {view === 'home' && <Home/>}
    {view === 'product' && <Product/>}
    {view === 'review' && <Review/>}
    </>
  )
}

export default MyApp;