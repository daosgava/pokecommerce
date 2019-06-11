import axios from 'axios';

export const consumePokeItems = ()=>{
    return axios.get(`https://pokeapi.co/api/v2/item`)
    .then((response)=>response.data.results);
}

export const getItemDetail = (url)=>{
    return axios.get(url)
    .then((response)=>response.data);
}