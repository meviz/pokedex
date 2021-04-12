import api from './base';
import {openDB} from "idb";
import axios from 'axios';


class Client {
    constructor(){
        openDB('favorite', 1, {
            upgrade(db) {
              db.createObjectStore('myFavorite', { keyPath: 'id' });
            },
          });
    }

    getWithUrl= async (url) => {
        return await axios.get(url);
    }

    getAllPokemon = async (limit,offset)=>{
        return await api.get(`/pokemon?limit=${limit}&offset=${offset}`).then(
            (res)=> res
        )
    }

    getPokemonDetail = async (id)=>{
        return await api.get(`/pokemon/${id}`);
    }

    setFavoritePokemon = async (body) => {
        const db = await openDB('favorite',1)
        return db.put('myFavorite', body)
    }

    deleteFavoritePokemon = async (id) => {
        const db = await openDB('favorite',1)
        return db.delete('myFavorite',id)
    }

    getAllFavoritePokemon = async () =>{
        const db = await openDB('favorite',1)
        return db.getAll('myFavorite');
    }
}

export const client = new Client();
