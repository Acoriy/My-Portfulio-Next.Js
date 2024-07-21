import '../styles/globals.css';
// componet
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import {useRouter} from "next/router";

// framer motion
import {AnimatePresence , motion} from 'framer-motion' 
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); 
  return (
    <Layout>
      <Head>
        <link rel='shortcut icon' type='x-icon' href='/iconeheadpage.png'></link>
         <title>Sofyane Acoriy |web developer</title>
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
   );
}

export default MyApp;
