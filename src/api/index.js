import axios from 'axios';

const url="https://covid19.mathdro.id/api";

export const fetchdata=async (country)=>{
     
    let changeableuri=url;
    if(country){
        changeableuri=`${url}/countries/${country}`
    }
    try{
        const response=await axios.get(changeableuri)

        return response.data

    }
    catch(error){
        console.log(error)
        return error
    }

   
}

export const fetchDailydata=async()=>{
    const response=await axios.get(`https://covid19.mathdro.id/api/daily`)

    return response.data
}


export const fetchCountry=async ()=>{
    const response=await axios.get('https://covid19.mathdro.id/api/countries')

    return response.data
}