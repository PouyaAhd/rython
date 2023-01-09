import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {store
} from '../redux/store'
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer/>
    </Provider>
  );
}

export default MyApp;
