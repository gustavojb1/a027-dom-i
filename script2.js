const frutas = ["laranja", "limão", "uva"];

for (i in frutas) {
  let item = document.getElementById(`fruta-${Number(i) + 1}`);
  item.innerHTML = frutas[i];
}

let id = 4;

function addFruta() {
  let fruta = document.getElementById("input-fruta").value;
  if (id == 4) {
    document.getElementById("fruta-4").innerHTML = fruta;
    id++;
  } else {
    frutas.push(fruta);
    ul = document.getElementById("lista-de-frutas");
    ul.innerHTML += `<li id="fruta-${id}">${frutas[frutas.length - 1]}</li>`;
    id++;
  }
}
