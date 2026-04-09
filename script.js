

const produtos = [
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" }
];

function renderizarProdutos(lista) {
    const container = document.getElementById("listaProdutos");
    container.innerHTML = ""; // Limpa a tela
 
    // Desafio: Se a lista estiver vazia [cite: 36, 37]
    if (lista.length === 0) {
        container.innerHTML = "<p>Putz! Não encontramos esse componente no estoque.</p>";
        return;
    }
 
    lista.forEach(produto => {
        // Cria o card usando Template Literals [cite: 35]
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
 
// Inicializa a tela com todos os produtos
renderizarProdutos(produtos);
 