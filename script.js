

const produtos = [
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" }
];

function renderizarProdutos(lista) {
    const container = document.getElementById("listaProdutos");
    container.innerHTML = ""; // Limpa a tela
 

    if (lista.length === 0) {
        container.innerHTML = "<p>Putz! Não encontramos esse componente no estoque.</p>";
        return;
    }
 
    lista.forEach(produto => {
     
        container.innerHTML += `
            <div class="card">
                <h3>${produto.nome}</h3>
                <p>Preço: ${produto.preco}</p>
                <span>Categoria: ${produto.categoria}</span>
            </div>
        `;
    });
}
 
const inputBusca = document.getElementById("campoBusca");
 
inputBusca.addEventListener("input", (e) => {
    const termoBusca = e.target.value.toLowerCase(); //
   
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca) // [cite: 33]
    );
 
    renderizarProdutos(produtosFiltrados);
});
 

renderizarProdutos(produtos);
 
