import "./assets/styles/global.css";
import { ToastContainer } from 'react-toastify';
import { RouterProvider} from 'react-router-dom'
import router from './router';


const App = () => {
  return (
    <>
          <ToastContainer />
          <RouterProvider router={router} />

    </>
  )
}

export default App
