import React from 'react';
import {useQuery, useMutation} from 'react-query';
import {client} from '../../api';
import PokemonList from '../../component/PokemonList';

function Favorite() {
    const favoriteQuery = useQuery("favorite",()=>client.getAllFavoritePokemon());

    const favoriteAddMutation = useMutation((data)=>client.setFavoritePokemon({name: data, id: data}))
    const favoriteRemoveMutation = useMutation((data)=>client.deleteFavoritePokemon(data))

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
            list={favoriteQuery.data 
                    ? favoriteQuery.data.map((item)=>{return {isFavorite: checkFavorite(item.name) , ...item}})
                    : []} 
            handleFavorite={handleFavorite} 
            loading={favoriteQuery.isFetching}
        />
    </>
  );
}

export default Favorite;
