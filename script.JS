const ul = document.querySelector('.lista-tarefas');

document.querySelector('.btn-add').onclick = () => {
  const input = document.querySelector('.input-animado');
  if (input.value.trim()) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = input.value;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox-tarefa';

    // Botão remover tarefa
    const btnRemove = document.createElement('button');
    btnRemove.innerText = '✕';
    btnRemove.className = 'btn-remove';
    btnRemove.setAttribute('aria-label', 'Remover tarefa');
    btnRemove.onclick = () => {
      ul.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(btnRemove);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        span.style.textDecoration = 'line-through';
        span.style.color = '#6b6b6fef';
      } else {
        span.style.textDecoration = 'none';
        span.style.color = '#000';
      }
    });

    ul.appendChild(li);
    input.value = '';
  }
};

document.querySelector('.btn-clear-done').onclick = () => {
  const tasks = ul.querySelectorAll('li');
  tasks.forEach(li => {
    const checkbox = li.querySelector('.checkbox-tarefa');
    if (checkbox && checkbox.checked) {
      ul.removeChild(li);
    }
  });
};

document.querySelector('.btn-check-all').onclick = () => {
  const tasks = ul.querySelectorAll('li');
  tasks.forEach(li => {
    const checkbox = li.querySelector('.checkbox-tarefa');
    const span = li.querySelector('span');
    if (checkbox) {
      checkbox.checked = true;
      span.style.textDecoration = 'line-through';
      span.style.color = '#6b6b6fef';
    }
  });

  

};
