let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores, nome do produto, quantidade e valor
    let produtoAdicionado = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let nomeProduto = produtoAdicionado.split('-')[0];
    let valorUnitario = produtoAdicionado.split('R$')[1];

    //valida se a quantidade de produtos é valida
    if(quantidade <= 0){
        alert('Insira uma quantidade de produtos valida');
        return;
    }else{
    //calcular preço do subtotal
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `
    <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    //atualizar valor total
    totalGeral = totalGeral + preco; 
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = 0;

    
    }

 

}



function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = ''; 
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = 'R$0.00'

}