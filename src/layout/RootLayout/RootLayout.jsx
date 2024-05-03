// import styles from  './RootLayout.module.css';
import {Outlet} from "react-router-dom";
import { Navbar } from '../../components';

const RootLayout = () => {




  return (
    <>
        <Navbar/>
        <Outlet/>
        {/* <Footer/> */}
    </>
  )
}

export default RootLayout;
