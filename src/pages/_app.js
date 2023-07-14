import { ThemeProvider } from "@material-tailwind/react";
import { wrapper } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import '@/styles/globals.scss'

function App({ Component, pageProps }) {
  const store = useStore();

  return (
    <ThemeProvider>
      <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>} store={store}>
        <Component {...pageProps} />
      </PersistGate>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App);