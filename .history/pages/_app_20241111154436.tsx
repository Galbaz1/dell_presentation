import '../styles/globals.css'
import '../styles/animations/slide1.css'
import '../styles/animations/slide2.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp 