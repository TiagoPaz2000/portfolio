https://tiagopaz2000.github.io/portfolio/

código temporário: 

async function cart(product) {
  if (localStorage.length === 0) {
    const { id, title } = product;
    const jsonObj = JSON.stringify([{id: id, title: title, count: 1}]);
    localStorage.setItem("carrinho", jsonObj);
    console.log('agr nao tem coisa');
  } else {
    const productJ = JSON.parse(localStorage["carrinho"]);
    const teste = productJ.find((data) => data.id === product.id)
    if (teste) {
      // aqui devo adicionar mais um ao count;
    } else {
      // aqui devo adicionar mais um objeto ao localStorage;
    }
  }
}
