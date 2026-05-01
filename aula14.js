const container = document.querySelector('#container');
const btnEletronicos = document.querySelector('#btn-eletronicos');
const btnLimpar = document.querySelector('#btn-limpar');

const produtos = [
    { nome: "Teclado", preco: 150.00, categoria: "Eletrônicos" },
    { nome: "Camiseta", preco: 50.00, categoria: "Vestuário" },
    { nome: "Mouse", preco: 80.00, categoria: "Eletrônicos" },
    { nome: "Caneca", preco: 25.00, categoria: "Utilidades" },
    { nome: "Monitor", preco: 900.00, categoria: "Eletrônicos" }
];

produtos.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    if (produto.categoria === "Eletrônicos") {
        card.classList.add('item-eletronico');
    }

    card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <small>Categoria: ${produto.categoria}</small>
    `;

    container.appendChild(card);
});

btnEletronicos.addEventListener('click', () => {
    const todosOsCards = document.querySelectorAll('.card');
    
    todosOsCards.forEach(card => {
        if (!card.classList.contains('item-eletronico')) {
            card.classList.toggle('escondido');
        }
    });
});

btnLimpar.addEventListener('click', () => {
    container.innerHTML = '';
});