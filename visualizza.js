// ************************* VISUALIZZO IL MENU COI QUADRATINI
function visualizzamenu(idAcuiattaccare) {
  if (!document.getElementById("idBoxMenu")) {
    menu.forEach((element, index) => {
      attaccaX(
        "ico" + element.titolo + index,
        idAcuiattaccare,
        ["squaremenu"],
        `<img src='public/${element.icona}'>`,
        "",
        "div"
      );
    });
  }
}
// ************************* VISUALIZZO LE DISCIPLINE INSEGNATE
function visualizzaDiscipline(idprofilo, discipline, idboxAcuiAttaccare) {
  if (!document.getElementById("idBoxDiscipline" + idprofilo)) {
    attaccaX(
      "idBoxDiscipline" + idprofilo,
      idboxAcuiAttaccare,
      ["opaco"],
      "",
      "",
      "div"
    );
    attaccaX(
      "titoloDiscipline" + idprofilo,
      "idBoxDiscipline" + idprofilo,
      ["btn", "titolonero", "marginetd"],
      "<h3>Discipline :</h3>",
      "",
      "div"
    );
    discipline.forEach((element) => {
      attaccaX(
        element + idprofilo,
        "idBoxDiscipline" + idprofilo,
        ["btn", "btndiscipline"],
        element,
        "",
        "div"
      );
    });
    attaccaX(
      "chiudidiscipline" + idprofilo,
      "idBoxDiscipline" + idprofilo,
      ["btn", "btnrosso"],
      "Chiudi",
      "destroy(`idBoxDiscipline" + idprofilo + "`)",
      "div"
    );
  }
}
// ************************* VISUALIZZO I GORNI PER POTRRLI SELEZIONARE
function visualizzagiorni(idprofilo, idbox) {
  if (!document.getElementById("basesceltagiorni" + idprofilo)) {
    let testoBoxbasesceltagiorni =
      "<div class='btn marginebottomuno titolonero'>Seleziona giorno</div>";
    giorni.map(
      (item, index) =>
        (testoBoxbasesceltagiorni +=
          "<div class='btn btndisponibilita' onClick='visualizzaorari(`container`,`" +
          item +
          "`)'>" +
          item +
          "</div>")
    );
    testoBoxbasesceltagiorni +=
      "<div class='btn btnrosso' onClick='destroy(`basesceltagiorni" +
      idprofilo +
      "`)'> Chiudi </div>";
    attacca(
      "basesceltagiorni" + idprofilo,
      idbox,
      ["opaco"],
      testoBoxbasesceltagiorni,
      ""
    );
  }
}
