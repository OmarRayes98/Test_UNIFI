import { createSlice } from '@reduxjs/toolkit';
import {fetchStolenBikes,fetchBikesId,fetchStolenBikesCount} from './bikes.actions';

const initialState = {

    allBikes:[],
    loading:false,
    error:null,
    objectBike:{},
    countStolenBikes:null,



}



const bikes = createSlice({
    name: "bikes",
    initialState ,

    reducers:{


    },

    extraReducers: (builder)=> {
        builder.addCase(fetchStolenBikes.pending, (state)=>{
            state.loading =true;
            state.error = null;
        });

        builder.addCase(fetchStolenBikes.fulfilled, (state,action)=>{
            state.loading =false;
            state.allBikes = action.payload;
        });

        builder.addCase(fetchStolenBikes.rejected, (state,action)=>{
            state.loading =false;
            state.error = action.error.message;
            state.allBikes=[];
        });

        builder.addCase(fetchBikesId.pending, (state)=>{
            state.loading =true;
            state.error = null;
            state.objectBike={};

        });

        builder.addCase(fetchBikesId.fulfilled, (state,action)=>{
            state.loading =false;
            state.objectBike = action.payload;
        });

        builder.addCase(fetchBikesId.rejected, (state,action)=>{
            state.loading =false;
            state.error = action.error.message;
            state.objectBike = {};
        });

        builder.addCase(fetchStolenBikesCount.fulfilled, (state,action)=>{
            state.countStolenBikes = action.payload;
        });


    }

})

export default bikes.reducer;

