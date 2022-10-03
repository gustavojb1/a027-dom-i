const frutas = ["laranja", "limão", "uva"];

// let lista = document.querySelectorAll("li");
// for (i in frutas) {
//   lista[i].innerHTML = frutas[i];
// }
//
for (i in frutas) {
  let item = document.getElementById(`fruta-${Number(i)+1}`);
  item.innerHTML = frutas[i];
}

document.getElementById("input-fruta").value = "maçã";

function addFruta() {
  let fruta = document.getElementById("input-fruta").value;

  frutas.push(fruta);

  document.getElementById("fruta-4").innerHTML = frutas[3];
}

