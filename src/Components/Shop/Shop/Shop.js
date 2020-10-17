import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../../fakeData';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        setAllProducts(fakeData.slice(0,10));
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col md={9} style={{borderRight:"1px solid lightgray"}}>
                        {
                            allProducts.length>0 && allProducts.map((product)=><ProductCard product={product} key={product.key}></ProductCard>)
                        }
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;