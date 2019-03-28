import React, { Component} from 'react';
import { LojaContext } from '../context/LojaContext';
import Col from 'react-boostrap/Col';
import Card from 'react-boostrap/Card';
import Button from 'react-boostrap/Button';
import Form from 'react-boostrap/Form';
import Container from 'react-boostrap/Container';
import Row from 'react-boostrap/Row';

class Registro extends Component {

    render(){
        return (
    
          <Container>
            <Row>
              <Col xs={5}>
                <Card className="">
                  <Card.Header as="h3">Registre-se:</Card.Header>
    
                  <Card.Body>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Seu Nome:</Form.Label>
                      <Form.Control type="text" placeholder="Insira seu primeiro nome" required />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Seu E-mail:</Form.Label>
                      <Form.Control type="email" placeholder="Insira seu e-mail" required />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Senha:</Form.Label>
                      <Form.Control type="password" placeholder="Senha" required />
                    </Form.Group>
    
                    <Button variant="outline-primary" block onClick={() => this.context.fazerLogin()}>
                      Efetuar cadastro
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      } 
    }
    
Registro.contextType = LojaContext;
    
export default Registro;
