//librerie

// FUNZIONE CHE CI PERMETTE DI DISTRUGGERE UN DIV DATO IL SUO ID
function destroy(id) {
  let a = document.getElementById(id);
  a.remove();
  document.body.removeEventListener("click", destroy);
}

//FUNZIONE CHE CI PERMETTE DI ATTACCARE UN DIV AD UN ALTRO
function attacca(idDaAttaccare, idDestinazione, css, testo, suclick) {
  let divDaAttaccare = document.createElement("div");
  css.map((item, index) => divDaAttaccare.classList.add(item));
  divDaAttaccare.setAttribute("id", idDaAttaccare);
  if (suclick) {
    divDaAttaccare.setAttribute("onClick", suclick);
  }
  let boxacuiattaccare = document.getElementById(idDestinazione);
  boxacuiattaccare.appendChild(divDaAttaccare);
  let divDaAttaccareI = document.getElementById(idDaAttaccare);
  divDaAttaccareI.innerHTML += testo;
  //divDaAttaccareI.onclick = suclick;
}
//permette di attaccare elementi diversi dai div
function attaccaX(idDaAttaccare, idDestinazione, css, testo, suclick, tipo) {
  let divDaAttaccare = document.createElement(tipo);
  css.map((item, index) => divDaAttaccare.classList.add(item));
  divDaAttaccare.setAttribute("id", idDaAttaccare);
  if (suclick) {
    divDaAttaccare.setAttribute("onClick", suclick);
  }
  let boxacuiattaccare = document.getElementById(idDestinazione);
  boxacuiattaccare.appendChild(divDaAttaccare);
  let divDaAttaccareI = document.getElementById(idDaAttaccare);
  divDaAttaccareI.innerHTML += testo;
}
