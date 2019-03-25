import React, { Component } from "react";
import { LojaProvider } from '../context/LojaContext';
import { LojaContext } from "../context/LojaContext";
import BarraDeBusca from "./BarraDeBusca";
import ListaDeProdutos from "./ListaDeProdutos";
import CarrinhoDeCompras from "./CarrinhoDeCompras";
import BancoDeDados from "../bd/BancoDeDados";
import InfoProduto from './InfoProduto';

import { BrowserRouter, Switch, Route} from '../../react-router-dom';


class Loja extends Component {
  render() {
    return (
      <LojaProvider>
        <BarraDeBusca/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ListaDeProdutos} />
            <Route path="/produtos" exact component={ListaDeProdutos} />
            <Route path="/produtos/:id" component={InfoProduto} />
            <Route component={PaginaNaoEncontrada} />
          </Switch>
        </BrowserRouter>
        <CarrinhoDeCompras/>
      </LojaProvider>
    );
  }
}

export default Loja;
