
function محاسبه() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('نتیجه').innerText = 'لطفاً دو عدد معتبر وارد کنید.';
    return;
  }

  const sum = a + b;
  document.getElementById('نتیجه').innerText = 'نتیجه: ' + sum;
}
