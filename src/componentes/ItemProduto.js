import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from '../../react-router-dom';

class ItemProduto extends Component {
  render() {
    return (
      <Col xs={3}>
        <Card className="text-center m-2">
          <Card.Header as="h4">{this.props.produto.nome}</Card.Header>
          <Card.Img variant="top" src={this.props.produto.imagem} />
          <Card.Body>
            <Card.Title><FormataMoeda valor={this.props.produto.preco}/></Card.Title>
            <Link className="outline-primary" to="/produtos/2">Ver detalhes</Link>
              Comprar
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

ItemProduto.contextType = LojaContext;
export default ItemProduto;