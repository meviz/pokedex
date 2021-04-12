import React from 'react';
import { Row, Col} from 'reactstrap';
import CardLoader from '../CardLoader';

const ListLoader = () => {
    const cardItem = () => {
        const arr = [];

        for(var i=0; i<=11; i++){
            arr.push(<Col key={i}>
                <CardLoader/>
            </Col>)
        }

        return arr;
    }

    return (
        <Row xs="1" lg="2" xl="4">
            {cardItem()}
        </Row>
    );
};

export default ListLoader;