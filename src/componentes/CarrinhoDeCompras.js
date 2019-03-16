import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemCarrinho from './ItemCarrinho';
import FormataMoeda from './FormataMoeda';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function CarrinhoDeCompras() {
  let { state, setCarrinhoVisivel } = useContext(LojaContext);
  let renderProduto = (p, i) => (<ItemCarrinho produto={p} index={i} key={i} />);

  return (
    <Modal show={state.carrinhoVisivel} centered onHide={() => setCarrinhoVisivel(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <Cabecalho/>
          <tbody>
            {state.carrinho.map(renderProduto)}
          </tbody>
          <Rodape carrinho={state.carrinho} />
        </Table>
      </Modal.Body>
    </Modal>
  );
}

// Criando alguns hooks para simplificar o código principal
function Cabecalho() {
  return (
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Produto</th>
        <th>Valor</th>
        <th>Ação</th>
      </tr>
    </thead>
  );
}

function Rodape(props) {
  let total = props.carrinho.reduce((acc, p) => acc + p.preco, 0);

  return (
    <tfoot>
      <tr>
        <th>&nbsp;</th>
        <th>Total</th>
        <th><FormataMoeda valor={total}/></th>
        <th>&nbsp;</th>
      </tr>
    </tfoot>
  );
}

export default CarrinhoDeCompras;