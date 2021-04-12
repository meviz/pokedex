import React, {useState} from 'react';
import { Row, Col, Button } from 'reactstrap';
import {useQuery, useMutation} from 'react-query';
import {client} from '../../api';
import {useParams} from 'react-router-dom';
import { createImgLink } from '../../helpers/createImageLink';
import DetailLoader from '../../component/Loader/DetailLoader';
import { BsStar,BsStarFill } from "react-icons/bs";

function Detail() {

    const { id } = useParams();

    const detailQuery = useQuery("detail",()=>client.getPokemonDetail(id));
    const speciesQuery = useQuery("species",()=>client.getWithUrl(detailQuery.data.data.species.url),{enabled: !detailQuery.isFetching});

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

    if(detailQuery.isFetching || speciesQuery.isFetching) return <DetailLoader/>
    return (<>
        <Row>
            <Col md={4}>
                <img width="100%" height="250px" src={createImgLink(detailQuery.data.data.name)} style={{objectFit:"contain"}} alt="No"/>
                <div><h4 className="border-bottom">STATS</h4></div>
                {detailQuery.data.data.stats.map((item,i,arr)=>(
                    <div className="d-flex justify-content-between">
                        <b>{item.stat.name}</b>
                        <p className="mb-0">{item.base_stat}</p>
                    </div>
                ))}
            </Col>
            <Col md={8}>
                <h1 className="w-100 d-flex justify-content-between mt-md-0 mt-2">
                    {speciesQuery.data.data.name.toUpperCase()}
                    <Button color="primary" onClick={()=>{handleFavorite(speciesQuery.data.data.name)}}>
                        {checkFavorite(speciesQuery.data.data.name) ? <BsStarFill/> : <BsStar/>}
                    </Button>
                </h1>
                <div className="mb-2">
                    <b>Abilities: </b> <span>{detailQuery.data.data.abilities.map((item,i,arr)=>`${item.ability.name}${(arr.length-1)!=i ? ", " : ""}`)}</span>
                </div>
                <div className="mb-2">
                    <b>Moves: </b> <span>{detailQuery.data.data.moves.map((item,i,arr)=>`${item.move.name}${(arr.length-1)!=i ? ", " : ""}`)}</span>
                </div>
                <div className="mb-2">
                    <b>Flavor Text: </b> <span>{speciesQuery.data.data.flavor_text_entries[0].flavor_text}</span>
                </div>
                <div className="mb-2">
                    <b>Base Happiness: </b> <span>{speciesQuery.data.data.base_happiness}</span>
                </div>
                <div className="mb-2">
                    <b>Capture Rate: </b> <span>{speciesQuery.data.data.capture_rate}</span>
                </div>
                <div className="mb-2">
                    <b>Growth Rate: </b> <span>{speciesQuery.data.data.growth_rate.name}</span>
                </div>
            </Col>
        </Row>
    </>
  );
}

export default Detail;
