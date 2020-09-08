/* function name(params) {}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

console.log();
{
}
``; */
//mettere tutto il codice all interno qui
// ++++++++++++++++++++ VARIABILI  E ARRAY CON OCCORRENZE +++++++++
//li prenderemo poi dal db
let menu = [
  { titolo: "Modifica Tuo profilo", icona: "profiloiconmodify.png", link: "" },
  { titolo: "Tuo profilo", icona: "profiloicon.png", link: "" },
  { titolo: "Pianifica orario", icona: "allenamentiicon.jpg", link: "" },
  { titolo: "", icona: "caleico.jpg", link: "" },
  { titolo: "", icona: "menucellicon.png", link: "" },
  { titolo: "", icona: "noimg.jpg", link: "" },
  { titolo: "", icona: "stretching.jpg", link: "" },
];
let discipline = ["zumba", "pilates", "jumping", "walking", "TRX"];
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
  {
    id: 6,
    img: "io.jpg",
    name: "Alessandro Del Piero",
    luoghi:
      "Biella, vercelli, torino,  novara, varese, cuneo,asti, asdas, da sd, dasd, dasd",
  },
  {
    id: 7,
    img: "io.jpg",
    name: "Alessandro Del Piero",
    luoghi:
      "Biella, vercelli, torino,  novara, varese, cuneo,asti, asdas, da sd, dasd, dasd",
  },
];
let giorni = [
  "Lunedi",
  "Martedi",
  "Mercoledi",
  "Giovedi",
  "Venerdi",
  "Sabato",
  "Domenica",
];
// ++++++++++++++++++++ / VARIABILI  E ARRAY CON OCCORRENZE +++++++++
attaccaX("centromain", "main", ["centromain"], "", "", "div");
attaccaX("upcentromain", "centromain", ["upcentromain"], "hint", "", "div");
attaccaX("downcentromain", "centromain", ["downcentromain"], "", "", "div");

//*****************       CREA IL BOX PROFILO  */
function boxprofilo(idprofilo, percorsoimg, nome, zona) {
  //Crea contenitore
  let box = document.createElement("div");
  box.setAttribute("id", "profilo" + idprofilo);
  box.classList.add("boxprofilo");
  let downcentromain = document.getElementById("downcentromain"); //appendo IL BOX AL CentroMAIN
  downcentromain.appendChild(box);
  let boxI = document.getElementById("profilo" + idprofilo);
  //inserisco immagine CREO PRIMA IL SUO CONTENITORE POI APPENDO LIMMAGINE

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
  immag.setAttribute("alt", nome + " " + zona);
  boxI.appendChild(immaginebox);
  let immagineboxI = document.getElementById("imgcontainer" + idprofilo);
  immagineboxI.setAttribute("onClick", "alert('aggiungi funzione')");
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
  //aggiungo bottone visualizza disponibilita

  let btndisponibilita = document.createElement("div");
  btndisponibilita.classList.add("btndisponibilita");
  btndisponibilita.classList.add("btn");
  btndisponibilita.classList.add("marginetopuno");
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
  btndiscipline.setAttribute(
    "onclick",
    "visualizzaDiscipline(" + idprofilo + ", discipline,'" + boxI.id + "')"
  );
  boxI.appendChild(btndiscipline);
  let btndisciplineI = document.getElementById("btndiscipline" + idprofilo);
  btndisciplineI.innerHTML = "Discipline";
}
//*****************    FINE  FUNZIONE CREA IL BOX PROFILO  */
//++++++++++++++++++ QUANDO IL DOCUMENTO è CARICATO RENDERIZZO
document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    let larghezzamenu = vh < vw ? vh : vw;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty(
      "--larghezzamenu",
      `${larghezzamenu}px`
    );
  });
  //renderizzo
  arrayistruttori.map((item, index) =>
    boxprofilo(item.id, item.img, item.name, item.luoghi)
  );
  visualizzamenu("idNav");
});
