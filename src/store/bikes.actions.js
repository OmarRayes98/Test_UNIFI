import { createAsyncThunk} from '@reduxjs/toolkit';

import { axiosPublic } from '../utils/api/axios';




export const fetchStolenBikes = createAsyncThunk("bikes/fetchStolenBikes", async(page) =>{

/* eslint-disable no-useless-catch */
    try{
        const res = await axiosPublic(`search?page=${page}&per_page=5&location=IP&distance=10&stolenness=stolen&access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw`,{
            method:"Get",
        });

        const data= res.data.bikes; 

        console.log(data,"data") // array of objects 

        return data;

    }catch(error){
        throw(error);

    }

});





export const fetchBikesId = createAsyncThunk("bikes/fetchBikesId", async(id) =>{


    try{
        const res = await axiosPublic(`bikes/${id}?access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw
        `,{
            method:"Get",
        });
        
        const data=  res.data.bike;//object

        console.log(data,"datads")
        
        return data;

    }catch(error){
        throw error;
    }

});


export const fetchStolenBikesCount = createAsyncThunk("bikes/fetchStolenBikesCount", async() =>{


    try{
        const res = await axiosPublic(`search/count?location=IP&distance=10&stolenness=stolen&access_token=H-KcfyLFjcOKcazkgJZ2Uwtxdt-BcVwJoj-9ortygjw`,{
            method:"Get",
        });
        
        const data=  res.data.stolen;//object

        console.log(data,"count count")
        
        return data;

    }catch(error){
        throw error;
    }

});
