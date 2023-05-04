import React, { PureComponent } from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class Currents extends PureComponent {
    render() {
      return (
        <div className="currents">
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row className="content">
                    <Message />
                </Row>
            </Container>
        </div>
      );
    }
}