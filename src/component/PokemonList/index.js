import React from 'react';
import { Row, Col} from 'reactstrap';
import ListLoader from '../Loader/ListLoader';
import PokemonCard from '../PokemonCard';
import Pagination from '../Pagination';
import { createImgLink } from '../../helpers/createImageLink';
import {client} from '../../api';

const PokemonList = ({list, maxCount, pagination, handleFavorite, handlePageChange, loading}) => {
    
    return (
        <>
            {loading 
            ? <ListLoader/> 
            : <Row xs="1" lg="2" xl="4" className="mb-4">
                {
                    list.map((item,i)=>{
                        return (<Col key={i}>
                            <PokemonCard
                                url={item.url}
                                onFavorite={()=>handleFavorite(item.name)}
                                name={item.name}
                                image={createImgLink(item.name)} 
                                title={item.name.toUpperCase()}
                                isFavorite={item.isFavorite}    
                            ></PokemonCard>
                        </Col>)
                    })
                }
                
            </Row>}
            
            {pagination && <Pagination totalItems={maxCount} pageSize={12} onSelect={handlePageChange}/>}
        </>
    );
};

export default PokemonList;