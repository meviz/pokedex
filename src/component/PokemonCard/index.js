import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';
import { BsStar,BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { client } from '../../api';
import CardLoader from '../Loader/CardLoader';

const PokemonCard = ({image, title, isFavorite, name, onFavorite, url}) => {
    const detailQuery = useQuery(["detail",name],()=>client.getPokemonDetail(name));

    if(detailQuery.isFetching) return <CardLoader/>
    return (
        <Card className="my-3">
            <div className="p-4">
                <CardImg width="100%" height="200px" src={image} style={{objectFit:"contain"}}/>
            </div>
            <CardBody>
                <CardTitle tag="h5" className="text-center"><Link to={`/pokemons/${name}`}>{title}</Link></CardTitle>
                <div><h4 className="border-bottom">STATS</h4></div>
                {detailQuery.data.data.stats.map((item,i,arr)=>(
                    <div className="d-flex justify-content-between">
                        <b>{item.stat.name}</b>
                        <p className="mb-0">{item.base_stat}</p>
                    </div>
                ))}

                <div><h4 className="mt-2 border-bottom">MOVES</h4></div>
                {detailQuery.data.data.moves.map((item,i,arr)=>i<=2 ? (
                    <div className="d-flex justify-content-between">
                        <b>{item.move.name}</b>
                    </div>
                ) : null)}

                <Button className="position-absolute fixed-top" color="primary" onClick={()=>{onFavorite(name)}}>
                    {isFavorite ? <BsStarFill/> : <BsStar/>}
                </Button>
            </CardBody>
        </Card>
    );
};

export default PokemonCard;