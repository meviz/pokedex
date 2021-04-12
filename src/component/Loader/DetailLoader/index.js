import React from 'react';
import { Row, Col} from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const DetailLoader = () => {
    
    return (
        <Row>
            <Col md={4}>
                <Skeleton height={250}/>
            </Col>
            <Col md={8}>
                <Skeleton height={40}/>
                <Row className="mt-4">
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                    <Col xs={4}><Skeleton/></Col>
                    <Col xs={8}><Skeleton/></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default DetailLoader;