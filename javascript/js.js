let changed = false;

document.addEventListener('DOMContentLoaded', () => {
  const translateBtn = document.getElementById('translateBtn');
  if (translateBtn) {
    translateBtn.addEventListener('click', () => {
      const fields = document.querySelectorAll('#passport p span');
      if (!changed) {
        fields[0].textContent = 'Leonidov';
        fields[1].textContent = 'Ivan';
        fields[2].textContent = '2000';
        changed = true;
      } else {
        fields[0].textContent = 'Леонидов';
        fields[1].textContent = 'Иван';
        fields[2].textContent = '2000';
        changed = false;
      }
    });
  }

  const checkBtn = document.getElementById('checkBtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      const A = parseFloat(document.getElementById('A').value);
      const B = parseFloat(document.getElementById('B').value);
      const C = parseFloat(document.getElementById('C').value);
      const result = document.getElementById('result');

      if (A < B && B < C) result.textContent = 'A < B < C';
      else if (A < B && B > C) result.textContent = 'A < B > C';
      else result.textContent = 'Не выполняется ни одно из неравенств';
    });
  }
});
