function visualizzaorari(idACuiAttaccare, giorno) {
  //document.getElementById(idACuiAttaccare).innerHTML = "";
  attacca(
    "contienicalendario",
    idACuiAttaccare,
    ["contienicalendario"],
    "",
    ""
  );
  attacca("oscuraSchermo", "contienicalendario", ["oscuraschermo"], "", "");
  attacca("idcontieniboard", "contienicalendario", ["contieniboard"], "", "");
  attacca(
    "idTitolo",
    "idcontieniboard",
    ["titoloa", "paddingtitolo"],
    "Situazione Ore del: " + giorno,
    ""
  );
  attacca("idTabOrari", "idcontieniboard", ["board"], "", "");
  attacca("idContainer1", "idTabOrari", ["container", "lblue"], "", "");
  attacca("idContainer2", "idTabOrari", ["container", "lred"], "", "");
  attacca("idContainer3", "idTabOrari", ["container", "lyellow"], "", "");
  attacca("idContieniChiudi", "idcontieniboard", ["titoloa"], "", "");
  //attacca("idspazio", "idContieniChiudi", ["spazio"], "", "");
  attacca(
    "btnChiudicalendario",
    "idContieniChiudi",
    ["btn", "bgrossoc"],
    "Chiudi",
    "destroy(`contienicalendario`)"
  );

  let indexmezzora = 0;
  let mezzore = ["00", "30"];
  let testo = "";
  for (let index = 0; index < 24; index++) {
    mezzore.forEach((element) => {
      testo = index + ":" + element;
      if (index < 8) {
        attacca(
          "idMezzora" + indexmezzora,
          "idContainer1",
          ["mezzore"],
          testo,
          ""
        );
      }
      if (index > 7 && index < 16) {
        attacca(
          "idMezzora" + indexmezzora,
          "idContainer2",
          ["mezzore"],
          testo,
          ""
        );
      }
      if (index > 15) {
        attacca(
          "idMezzora" + indexmezzora,
          "idContainer3",
          ["mezzore"],
          testo,
          ""
        );
      }

      indexmezzora++;
    });
  }
}
