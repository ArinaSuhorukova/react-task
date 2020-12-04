import './App.css';
import AddProductPanel from "./components/AddProductPanel";
import {Col, Container, Row} from 'reactstrap';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {lazy, Suspense} from "react";

const ProductListPanel = lazy(() => import('./components/ProductList'));
const ProductView = lazy(() => import('./components/ProductDetails'));

function App() {

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <AddProductPanel/>
                </Col>
                <Col>
                    <BrowserRouter>
                        <Suspense fallback={<div/>}>
                            <Switch>
                                <Route exact path='/' component={ProductListPanel}/>
                                <Route exact path='/:id' component={ProductView}/>
                            </Switch>
                        </Suspense>
                    </BrowserRouter>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
