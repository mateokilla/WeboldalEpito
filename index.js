function ValamitCSinal() {
  console.log("Ez egy függvény!");
}
//ValamitCSinal();

let üzenet = "Üzenet egy változóban!";

function ÜzenetVáltozóMEgjelenítő(valami) {
  console.log(valami);
}
//ÜzenetVáltozóMEgjelenítő(üzenet);

//számláló, ami megszámlálja n szám között, hány páros szám található
function Számláló(n) {
  let parosSzamok = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      parosSzamok++;
    }
  }
  console.log(parosSzamok);
}

Számláló(100);
