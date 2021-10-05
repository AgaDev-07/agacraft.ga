function showDiv1() {
  document.getElementById('div1').style.display = '';
  document.getElementById('div2').style.display = 'none';
  document.getElementById('bo1').style.display = 'none';
  document.getElementById('bo2').style.display = '';
  document.getElementById('bo3').style.display = 'none';
  document.getElementById('bo4').style.display = '';
}
function noShowDiv1() {
  document.getElementById('div1').style.display = 'none';
  document.getElementById('bo1').style.display = '';
  document.getElementById('bo2').style.display = 'none';
  document.getElementById('bo3').style.display = '';
  document.getElementById('bo4').style.display = 'none';
}

function showDiv2() {
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = '';
  document.getElementById('bo1').style.display = 'none';
  document.getElementById('bo2').style.display = '';
  document.getElementById('bo3').style.display = 'none';
  document.getElementById('bo4').style.display = '';
}
function noShowDiv2() {
  document.getElementById('div2').style.display = 'none';
  document.getElementById('bo1').style.display = '';
  document.getElementById('bo2').style.display = 'none';
  document.getElementById('bo3').style.display = '';
  document.getElementById('bo4').style.display = 'none';
}
