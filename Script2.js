const ul = document.querySelector('.lista-tarefas2');

document.querySelector('.btn-add2').onclick = () => {
  const input = document.querySelector('.input-animado2');
  if (input.value.trim()) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = input.value;

    
    li.appendChild(span);

    ul.appendChild(li);
    input.value = '';
  }
};


