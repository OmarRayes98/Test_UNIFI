import ReactDOM from 'react-dom/client'
import'react-toastify/dist/ReactToastify.min.css';

import { Provider } from 'react-redux';
import store from './store';

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />

  </Provider>
)
