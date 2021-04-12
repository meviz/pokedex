import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import {client} from '../../api';
import PokemonList from '../../component/PokemonList';

function Pokemon() {
    const [activePage, setActivePage] = useState(1);

    const pokemonListQuery = useQuery(["allPokemons",activePage],()=>client.getAllPokemon(12,(activePage-1)*12),{
        onSuccess: (res)=>{
            console.log(res,"asdasd");
        }
    })
    const favoriteQuery = useQuery("favorite",()=>client.getAllFavoritePokemon());

    const favoriteAddMutation = useMutation((data)=>client.setFavoritePokemon({name: data, id: data}))
    const favoriteRemoveMutation = useMutation((data)=>client.deleteFavoritePokemon(data))

    const handleSelect = (item) =>{
        setActivePage(item);
        pokemonListQuery.refetch(item);
    }

    const handleFavorite = async (name) =>{
        if(checkFavorite(name)){
            await favoriteRemoveMutation.mutateAsync(name)
        }else{
            await favoriteAddMutation.mutateAsync(name)
        }
        
        favoriteQuery.refetch();
    }

    const checkFavorite = (name) => {
        if(favoriteQuery.data){
            const ind = favoriteQuery.data.findIndex((f)=>f.name === name)
            if(ind>=0){
                return true
            }
        }

        return false;
    }

    return (<>
        <PokemonList 
            maxCount={pokemonListQuery.data ? pokemonListQuery.data.data.count : 0} 
            list={pokemonListQuery.data 
                    ? pokemonListQuery.data.data.results.map((item)=>{return {isFavorite: checkFavorite(item.name) , ...item}})
                    : []} 
            handleFavorite={handleFavorite} 
            loading={pokemonListQuery.isFetching} 
            handlePageChange={handleSelect}
            pagination 
        />
    </>
  );
}

export default Pokemon;
