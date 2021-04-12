import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const CardLoader = () => {
    return (
        <Card className="my-3">
            <CardBody>
                <Skeleton height={150}></Skeleton>
                <Skeleton height={40}/>
                <Skeleton height={30}/>
                <Skeleton count="6"/>
                <Skeleton height={30}/>
                <Skeleton count="3"/>
            </CardBody>
        </Card>
    );
};

export default CardLoader;