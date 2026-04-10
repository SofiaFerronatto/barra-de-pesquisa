

const produtos = [
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" }
];

const grid = document.getElementById("listaProdutos")
const imputBusca = document.getElementById("busca")

function renderizar(lista) {
 grid.innerHTML = ""
 

    if (lista.length === 0) {
        container.innerHTML = "<p>Putz! Não encontramos esse componente no estoque.</p>";
        return;
    }
 
    lista.forEach(item => {
     const cardHTML = `
            <div class="card">
                <h3>${item.nome}</h3>
                <span class="Categoria" ${item.categoria}</span>
                <p class="preco"> ${item.preco}</p>
              
            </div>
        `;
    });
}
 
 
inputBusca.addEventListener("input", () => {
    const termo = imputBusca.value.toLowerCase()
   
    const produtosFiltrados = produtos.filter(p =>
    returnp.nome.toLowerCase().includes(termo)
                                              })
renderizarProdutos(produtosFiltrados);
});
 

renderizarProdutos(produtos);
 
