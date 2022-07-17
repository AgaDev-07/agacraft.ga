function showDiv1() {
  document.getElementById('btn1').value = 'Crafteos <';
  document.getElementById('btn1').onclick = noShowDiv1;
  document.getElementById('div1').style.display = '';
  noShowDiv2();
}
function noShowDiv1() {
  document.getElementById('btn1').value = 'Crafteos >';
  document.getElementById('btn1').onclick = showDiv1;
  document.getElementById('div1').style.display = 'none';
}

function showDiv2() {
  document.getElementById('btn2').value = 'Bloques  <';
  document.getElementById('btn2').onclick = noShowDiv2;
  document.getElementById('div2').style.display = '';
  noShowDiv1();
}
function noShowDiv2() {
  document.getElementById('btn2').value = 'Bloques  >';
  document.getElementById('btn2').onclick = showDiv2;
  document.getElementById('div2').style.display = 'none';
}
