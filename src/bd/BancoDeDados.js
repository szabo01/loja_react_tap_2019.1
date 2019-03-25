const PRODUTOS = [
    {id: 1, nome: 'Notebook', preco: 2300, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133775/9/133775934_1GG.jpg"},
    {id: 120, nome: 'Fritadeira', preco: 190, imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/127878/8/127878831_1GG.png"},
    {id: 12000, nome: 'Fonte', preco: 80, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/8579/3/8579390_1GG.jpg"},
    {id: 60130, nome: 'Relogio', preco: 80, imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/41940/8/41940837_1GG.jpg"},
    {id: 1245, nome: 'Micro-ondas', preco: 349, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/47165/1/47165105_1GG.jpg"},
    {id: 54231, nome: 'Smart TV', preco: 1300, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/133869/3/133869367_1GG.jpg"},
    {id: 9812, nome: 'Cafeteira', preco: 280, imagem: "https://images-americanas.b2w.io/produtos/01/00/item/130321/1/130321195_1GG.jpg"},
    {id: 4356728, nome: 'Bandeja', preco: 12, imagem: "https://images-americanas.b2w.io/produtos/01/00/oferta/16021/1/16021131_1GG.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;