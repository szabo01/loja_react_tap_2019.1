import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BancoDeDados from '../bd/BancoDeDados';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class InfoProduto extends Component {
render(){

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card.Img variant="top" src={this.state.produto.imagem} />
        </Col>

        <Col xs={6}>
          <Card className="text-left m-2">
            <Card.Body>
            <h4>{this.state.produto.nome}</h4>
              <Card.Text>{this.state.produto.descricao}</Card.Text>
              <Card.Title><FormataMoeda valor={4000}/></Card.Title>
              <Button variant="outline-primary" block onClick={() => this.context.comprar(this.state.produto.id)}>
                Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
}

InfoProduto.contextType = LojaContext;

export default InfoProduto;