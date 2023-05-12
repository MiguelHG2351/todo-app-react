import { Provider } from 'react-redux';
import { Inter } from 'next/font/google'
import '../styles/global.css'
import store from '../components/Redux';

const inter = Inter({ subsets: ['latin'] });

export default function App({Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}