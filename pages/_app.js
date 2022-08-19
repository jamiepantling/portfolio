import '../styles/globals.css'
import '../styles/transition.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Transition from '../components/Transition'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Transition><Component {...pageProps} /></Transition>
}

export default MyApp
