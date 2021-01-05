const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',];

const getStates = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
  const opcao = document.createElement('option');
  getStates.appendChild(opcao);
  opcao.value = estados[index];
  opcao.innerText = estados[index];
}

document.getElementById('submit').addEventListener('click', send);

function send(event) {
  event.preventDefault()
  const resultDivs = document.getElementById('results');
  const fields = document.querySelectorAll('input');
  //console.log();
  for (let index = 0; index < fields.length; index += 1) {
    if (index === 5) {
      if (fields[5].checked === true){
        const textTag = document.createElement('p');
        resultDivs.appendChild(textTag);
        textTag.innerText = fields[index].value;
      }
      const textTag = document.createElement('p');
      resultDivs.appendChild(textTag);
      textTag.innerText = document.getElementById('estados').value;
    } else if (index === 6) {
      if (fields[6].checked === true){
        const textTag = document.createElement('p');
        resultDivs.appendChild(textTag);
        textTag.innerText = fields[index].value;
      }
    } else {
      const textTag = document.createElement('p');
      resultDivs.appendChild(textTag);
      textTag.innerText = fields[index].value; 
    }
  }
}

document.getElementById('clear').addEventListener('click', clearForm);

function clearForm() {
  const fields = document.querySelectorAll('input');
  for (let index = 0; index < fields.length; index += 1) {
    fields[index].value = '';
  }
  const resultDivs = document.getElementById('results'); 
  while (resultDivs.children.length > 0) {
    resultDivs.removeChild(resultDivs.children[0]);
  }
}
