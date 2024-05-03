import { configureStore } from '@reduxjs/toolkit';
import bikes from './bikes.slice';


const store = configureStore({
    reducer:{
        bikes,


    }
});

export default store;