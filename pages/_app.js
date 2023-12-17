import NextNProgress from 'nextjs-progressbar';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress 
        color="yellow" 
        startPosition={0.3} 
        stopDelayMs={200} 
        height={2} 
        showOnShallow={true} 
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp