let giorni = [
  "Lunedi",
  "Martedi",
  "Mercoledi",
  "Giovedi",
  "Venerdi",
  "Sabato",
  "Domenica",
];
function prova(numero) {
  console.log("riuscita", numero);
}
function visualizzagiorni(idprofilo, idbox) {
  if (!document.getElementById("basesceltagiorni" + idprofilo)) {
    let basesceltagiorni = document.createElement("div");
    basesceltagiorni.classList.add("opaco");
    basesceltagiorni.setAttribute("id", "basesceltagiorni" + idprofilo);
    let boxacuiattaccare = document.getElementById(idbox);

    boxacuiattaccare.appendChild(basesceltagiorni);
    console.log(boxacuiattaccare.style.overflowX);
    let basesceltagiorniI = document.getElementById(
      "basesceltagiorni" + idprofilo
    );
    basesceltagiorniI.innerHTML =
      "<div style=`font-weight:bold;color:blue;`>Seleziona giorno</div>";
    giorni.map(
      (item, index) => (
        (basesceltagiorniI.innerHTML +=
          "<div class='btn btndisponibilita'>" + item + "</div>"),
        console.log(item)
      )
    );
    basesceltagiorniI.innerHTML +=
      "<div class='btn btnrosso' onClick='destroy(`basesceltagiorni" +
      idprofilo +
      "`)'> Chiudi </div>";
  }
}
function destroy(id) {
  let a = document.getElementById(id);
  a.remove();
  document.body.removeEventListener("click", destroy);
}
