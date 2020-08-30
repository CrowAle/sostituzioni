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
    immag.setAttribute("src", "public/" + "noimg.png");
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
  btndisponibilita.classList.add("btn");
  btndisponibilita.setAttribute("id", "btndisponibilita" + idprofilo);
  btndisponibilita.setAttribute(
    "onclick",
    "visualizzagiorni(" + idprofilo + ",`" + boxI.id + "`)"
  );

  boxI.appendChild(btndisponibilita);
  let btndisponibilitaI = document.getElementById(
    "btndisponibilita" + idprofilo
  );
  btndisponibilitaI.innerHTML =
    "<div>Disponibilita</div>" +
    '<img src="public/caleico.jpg" heigth="25rem" width="25rem" style="align:centre;bottom:0px;"></img>';
  //aggiungi bottone visualizza discipline
  let btndiscipline = document.createElement("div");
  btndiscipline.classList.add("btndiscipline");
  btndiscipline.classList.add("btn");
  btndiscipline.setAttribute("id", "btndiscipline" + idprofilo);
  btndiscipline.setAttribute("onclick", "prova(" + idprofilo + ")");
  boxI.appendChild(btndiscipline);
  let btndisciplineI = document.getElementById("btndiscipline" + idprofilo);
  btndisciplineI.innerHTML = "Discipline";
}

document.addEventListener("DOMContentLoaded", function (event) {
  let arrayistruttori = [
    {
      id: 1,
      img: "io.jpg",
      name: "Alessio Busato",
      luoghi:
        "Biella, vercelli, torino, milano, novara, varese, cuneo,asti, asdas, da sd, dasd, dasd",
    },
    {
      id: 2,
      img: "io.jpg",
      name: "Giuseppe Mazzini",
      luoghi:
        "Biella, vercelli, torino, milano, novara, varese,  asdas, da sd, dasd, dasd",
    },
    {
      id: 3,
      img: "io.jpg",
      name: "Garibaldi FuFerito",
      luoghi: "cuneo,asti, asdas, da sd, dasd, dasd",
    },
    {
      id: 4,
      img: "io.jpg",
      name: "Giuseppe conte",
      luoghi: "Biella, vercelli,  cuneo,asti, asdas, da sd, dasd, dasd",
    },
    {
      id: 5,
      img: "io.jpg",
      name: "Alessandro Del Piero",
      luoghi:
        "Biella, vercelli, torino,  novara, varese, cuneo,asti, asdas, da sd, dasd, dasd",
    },
  ];
  //renderizzo
  arrayistruttori.map((item, index) =>
    boxprofilo(item.id, item.img, item.name, item.luoghi)
  );

  const rectorario = {
    colore: "#ffffff",
    coloreDisponibile: "yellowgreen",
  };
});
