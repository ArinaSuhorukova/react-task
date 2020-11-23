import './App.css';
import AddProductPanel from "./components/AddProductPanel";
import {Col, Container, Row} from 'reactstrap';
import ProductListPanel from "./components/ProductList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductView from "./components/ProductDetails";
import React from "react";

function App() {

    return (
        <Container className='MainPanel' fluid={true}>
            <Row>
                <Col className='LeftPanel'>
                    <AddProductPanel/>
                </Col>
                <Col className='RightPanel'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={ProductListPanel}/>
                            <Route exact path='/:id' component={ProductView}/>
                        </Switch>
                    </BrowserRouter>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
