//Ezek az alapvető programozási tételek!
//https://szit.hu/doku.php?id=oktatas:programozas:programozasi_tetelek:mondatszeru_leiras

//1. Összegzés:
function Osszegzes(n) {
  let osszeg = 0;
  for (i = 1; i <= n; i++) {
    osszeg++;
  }
  console.log(osszeg);
}
//Osszegzes(5);

//2. Megszámlálás
//pl. megszámolja a páros számokat n sokasságú halmazban
function Megszamlalas(n) {
  let szamlalo = 0;
  for (i = 1; i < n; i++) {
    if (i % 2 == 0) {
      szamlalo++;
    }
  }
  console.log(szamlalo);
}
//Megszamlalas(5);

//3. Eldöntés
//pl eldönti, egy érték megtalálható-e egy tömbben
function Eldontes(n, k) {
  let szamlalo = 0;
  for (i = 0; i <= n; i++) {
    if (i == k) {
      szamlalo = 1;
    }
  }
  if (szamlalo == 0) {
    console.log(
      `A keresett szám, ami ${k} nem található meg a(z) ${n} sokasságú halmazban!`
    );
  } else {
    console.log(
      `A keresett szám, ami ${k}  megtalálható  a(z) ${n} sokasságú halmazban!`
    );
  }
}
//Eldontes(10, 11);

// 4. Kiválogatás
//Kiválogatja egy n sokasságú tömbből a páratlan számokat, és egy új tömbbe helyezi őket
function Kivalogatas(n) {
  let parosSzamok = [];
  for (i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      parosSzamok.push(i);
    }
  }
  console.log(parosSzamok);
}
//Kivalogatas(5);

//szétválogatás tétele
//egy bizonyos feltétel szerint szétválogatja a tömb elemeit
function Szetvalogatas(n) {
  let parosSzamok = [];
  let paratlanSzamok = [];
  for (i = 1; i < n; i++) {
    if (i % 2 === 0) {
      parosSzamok.push(i);
    } else {
      paratlanSzamok.push(i);
    }
  }
  console.log(`A páros számok tömbje az ${n} elemű tömbben ${parosSzamok}`);
  console.log(`A páros számok tömbje az ${n} elemű tömbben ${paratlanSzamok}`);
}
//Szetvalogatas(20);

//metszet
//Két tömb azonos elemeinek kiválogatása egy harmadik tömbbe
var elsoTomb = [5, 3, 6, 2, 1];
var masodikTomb = [6, 2, 7, 8, 9];
function Metszet(tomb1, tomb2) {
  let metszet = [];
  for (i = 0; i < tomb1.length; i++) {
    for (j = 0; j < tomb2.length; j++) {
      if (tomb1[i] == tomb2[j]) {
        metszet.push(tomb1[i]);
      }
    }
  }
  console.log(`A ${tomb1} és a ${tomb2} metszete a ${metszet} tömb.`);
}

//Metszet(elsoTomb, masodikTomb);

//Unió
//A és B tömb minden elemét szeretnénk C tömbbe tenni.

const egyesTomb = [5, 3, 6, 2, 1];
const kettesTomb = [6, 2, 7, 8, 9];
function Unio(tomb1, tomb2) {
  let unio = [];
  for (i = 0; i < tomb1.length; i++) {
    unio.push(tomb1[i]);
  }
  for (j = 0; j < tomb2.length; j++) {
    unio.push(tomb2[j]);
  }
  console.log(`A ${tomb1} és a ${tomb2} tömbök uniója a ${unio} tömb.`);
}
//Unio(egyesTomb, kettesTomb)

//Maximum
//Keressük a tömb legnagyobb elemét.

const maxiTomb = [15, 222, 0, 65, 5, 2];
function Maximum(tomb) {
  maxErtek = tomb[0];
  for (i = 0; i < tomb.length; i++) {
    if (tomb[i] > maxErtek) {
      maxErtek = tomb[i];
    }
  }
  console.log(maxErtek);
}
//Maximum(maxiTomb)

//Minimum
//Keressük a tömb legnagyobb elemét.

const miniTomb = [15, 222, 55, 65, 8, 12];
function Minimum(tomb) {
  minErtek = tomb[0];
  for (i = 0; i < tomb.length; i++) {
    if (tomb[i] < minErtek) {
      minErtek = tomb[i];
    }
  }
  console.log(minErtek);
}
//Minimum(miniTomb)

//random szám generátor
//generál egy darab random számot
/*function randomSzam (n){
  return Math.round(Math.random()*n)
}
console.log(randomSzam(100))*/

//random szám generátor egy intervallumban
function randomSzamIntervallum(alsó, felső) {
  return Math.round(Math.random() * (felső - alsó) + alsó);
}
console.log(randomSzamIntervallum(10,500))