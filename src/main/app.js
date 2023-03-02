const produto = [
  {
    id: 0,
    imagem: "src/img/fone-gamer.png",
    title: "Fone Gamer",
    preco: 120,
  },
  {
    id: 1,
    imagem: "src/img/teclado-mouse.png",
    title: "Teclado/Mouse",
    preco: 340,
  },
  {
    id: 2,
    imagem: "src/img/monitor-beng.png",
    title: "Monitor Beng",
    preco: 970,
  },
  {
    id: 3,
    imagem: "src/img/cadeira-gamer.png",
    title: "Cadeira Gamer",
    preco: 830,
  },
];

const categorias = [...new Set(produto.map((item) => item.title))];

let i = 0;
let count = 0;

document.querySelector(".root").innerHTML = categorias
  .map((item) => {
    const itemProduto = produto.find((produto) => produto.title === item);
    const { imagem, title, preco } = itemProduto;
    return (
      `<div class="box">
        <div class='img-box'>
        <img class='imagens' src=${imagem}> </img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${preco}.00</h2>` +
      "<button onclick='adicionarCarrinho(" +
      i++ +
      ")'>Comprar</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

const cart = [];

function adicionarCarrinho(a) {
  const itemProduto = produto.find(
    (produto) => produto.title === categorias[a]
  );
  cart.push({
    imagem: itemProduto.imagem,
    title: itemProduto.title,
    preco: itemProduto.preco,
  });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0;
  document.querySelector(".count").innerHTML = cart.length;
  let total = 0;
  if (cart.length == 0) {
    document.querySelector(".carrinhoItem").innerHTML =
      "Seu carrinho está vazio";
    document.querySelector(".total").textContent = "R$00";
  } else {
    document.querySelector(".carrinhoItem").innerHTML = cart
      .map((item) => {
        var { imagem, title, preco } = item;
        total += preco;
        return `<div class="carrinhoItem">
                    <div class="row-img">
                        <img class='rowimg' src=${imagem}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:12px;'>R$ ${preco}.00</h2>
                    <i class='fa fa-trash-o' onclick='delElement(${j})'></i>
                </div>`;
      })
      .join("");
    document.querySelector(".total").textContent = `R$ ${total}.00`;
  }
}
