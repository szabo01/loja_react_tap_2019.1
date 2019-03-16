import React, { useState } from 'react';

export const LojaContext = React.createContext();

export function LojaProvider(props) {
  const [produtosBackend, setProdutosBackend] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);

  let buscar = (termo) => {
    setProdutos(produtosBackend.filter((p) => {
      return p.nome.toLowerCase().includes(termo.toLowerCase());
    }));
  };

  let comprar = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  let remover = (indice) => { // TODO - há um bug aqui, corrigir !
    let carrinho = [...carrinho];
    carrinho.splice(indice, 1);
    setCarrinho({carrinho});
  };

  return (
    <LojaContext.Provider value={{
        state: { produtos, carrinho, carrinhoVisivel},
        setProdutosBackend: (produtos) => {
          setProdutosBackend(produtos);
          setProdutos(produtos);
        },
        buscar,
        comprar,
        remover,
        setCarrinhoVisivel
    }}>
      {props.children}
    </LojaContext.Provider>
  );
}
