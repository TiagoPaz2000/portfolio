const values = document.querySelectorAll('.values');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');

function teste() {
  let array = [];
  values.forEach(element => {
    array.push(parseInt(element.value, 10));
  });
  const teste2 = array.map(element => {
    if (Number.isNaN(element)) {
      element = 0;
    }
    return element;
  });
  console.log(teste2);
  return teste2;
}

function calc() {
  const array = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00, 50.00, 100.00, 200.00];
  let valueMoedas = 0;
  let valueNotas = 0;
  teste().forEach((element, index) => {
    if (index < 5) {
      valueMoedas += element * array[index];
    }
    if (index >= 5) {
      valueNotas += element * array[index];
    }
  })
  if (valueMoedas < 1) {
    valueMoedas = valueMoedas.toPrecision(2);
  } else if (valueMoedas >= 1) {
    valueMoedas = valueMoedas.toPrecision(4);
  }

  result1.innerHTML = 'Resultado de Moedas: ' + valueMoedas;
  result2.innerHTML = 'Resultado de Notas: ' + valueNotas;
  result3.innerHTML = 'Resultado Total: ' + (valueMoedas + valueNotas);
}

const clearBtn = document.querySelector('#clearButton');
clearBtn.addEventListener('click', () => {
  result1.innerHTML = 'Resultado de Moedas: ';
  result2.innerHTML = 'Resultado de Notas: ';
  result3.innerHTML = 'Resultado Total: ';
  values.forEach(element => element.value = '');
})
