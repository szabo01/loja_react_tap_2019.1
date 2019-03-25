import React, { Component } from 'react';
import BancoDeDados from '../bd/BancoDeDados';


export const LojaContext = React.createContext();

export class LojaProvider extends Component {
  state = {
    appName: "UNIFACISA Store",
    produtos: BancoDeDados.getProdutos(),
    carrinho: JSON.parse(localStorage.getItem('carrinho')) || [],
    carrinhoVisivel: false
  };  

  render() {
    return (
      <LojaContext.Provider value={{
          state: this.state,
          buscar: (termo) => {
            let produtos = BancoDeDados.getProdutos().filter((p) => {
              return p.nome.toLowerCase().includes(termo.toLowerCase());
            });
            this.setState({produtos});
          },
          comprar: (produto) => {            
            let carrinho = [...this.state.carrinho, produto];
            this.setState({carrinho});
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
          },
          remover: (indice) => {
            let carrinho = [...this.state.carrinho];
            carrinho.splice(indice, 1);
            this.setState({carrinho});
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
          },
          mostrarCarrinho: () => {
            this.setState({carrinhoVisivel: true});
          },
          esconderCarrinho: () => {
            this.setState({carrinhoVisivel: false});
          }
      }}>
        {this.props.children}
      </LojaContext.Provider>
    );
  }
}