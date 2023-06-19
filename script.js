function tabuada() {
  var numero = document.getElementById("numero");
  var tab = document.getElementById("seltab");

  if (numero.value.length == 0) {
    alert("Por favor, digite um número.");
  } else {
    var n = Number(numero.value);
    tab.innerHTML = "";
    for (i = 1; i <= 10; i++) {
      var item = document.createElement("option");
      item.text = `${n} x ${i} = ${n * i}`;
      item.value = "tab${i}";
      tab.appendChild(item);
    }
  }
}
