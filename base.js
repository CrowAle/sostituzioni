/* function name(params) {}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

console.log();
{
}
``; */
//mettere tutto il codice all interno qui

function boxprofilo(idprofilo, percorsoimg, nome, zona) {
  //Crea contenitore
  let box = document.createElement("div");
  box.setAttribute("id", "profilo" + idprofilo);
  box.classList.add("boxprofilo");
  let main = document.getElementById("main"); //appendo al contenitore
  main.appendChild(box);
  let boxI = document.getElementById("profilo" + idprofilo);
  //inserisco immagine
  let immaginebox = document.createElement("div");

  immaginebox.setAttribute("id", "imgcontainer" + idprofilo);
  immaginebox.classList.add("imageprofilo");

  let immag = document.createElement("img");
  immag.classList.add("imageprofilo");
  if (percorsoimg !== undefined) {
    immag.setAttribute("src", "public/" + percorsoimg);
  } else {
    immag.setAttribute("src", "public/" + "noimg.jpg");
  }
  immaginebox.setAttribute("alt", nome + " " + zona);
  boxI.appendChild(immaginebox);
  let immagineboxI = document.getElementById("imgcontainer" + idprofilo);
  immagineboxI.appendChild(immag);
  //inserisco nome istruttore
  let istruttore = document.createElement("div");
  istruttore.classList.add("infoprofilo");
  istruttore.classList.add("nomeprofilo");
  istruttore.setAttribute("id", "istruttore" + idprofilo);
  boxI.appendChild(istruttore);
  let istruttoreI = document.getElementById("istruttore" + idprofilo);
  istruttoreI.innerHTML = nome;
  //inserisco luogo istruttore
  let luogoistruttore = document.createElement("div");
  luogoistruttore.classList.add("infoprofilo");
  luogoistruttore.setAttribute("id", "luogoistruttore" + idprofilo);
  boxI.appendChild(luogoistruttore);
  let luogoistruttoreI = document.getElementById("luogoistruttore" + idprofilo);
  luogoistruttoreI.innerHTML = zona;
  //aggiungi bottone visualizza disponibilita
  let btndisponibilita = document.createElement("div");
  btndisponibilita.classList.add("btndisponibilita");
  btndisponibilita.setAttribute("id", "btndisponibilita" + idprofilo);
  boxI.appendChild(btndisponibilita);
  let btndisponibilitaI = document.getElementById(
    "btndisponibilita" + idprofilo
  );
  btndisponibilitaI.innerHTML = "Disponibilita";
}

document.addEventListener("DOMContentLoaded", function (event) {
  boxprofilo(1, undefined, "Alessio Busato", "Biella");
  boxprofilo(2);
  boxprofilo(3);
  boxprofilo(4);
  boxprofilo(5);
  const rectorario = {
    colore: "#ffffff",
    coloreDisponibile: "yellowgreen",
  };
});
