import {createBrowserRouter  } from 'react-router-dom'
import RootLayout from '../layout/RootLayout/RootLayout';
import NotFound from '../layout/NotFound/NotFound';
import AllBikes from '../pages/AllBikes';
import BikeDetails from '../pages/BikeDetails';



const router = createBrowserRouter ([
    {
        path: '/',
        element:(
             <RootLayout/>
             ),
        errorElement:  <NotFound/>,
        children :
        [
            {
                index:true,
                element:(
                     <AllBikes/>
                     ) ,
            },
            {
                path :"/:id" ,
                element: (
                        <BikeDetails/>
                ) ,
                
            },
            


        ]


    },
]);

export default router;