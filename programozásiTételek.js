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
//pl eldönti, egy érték megtalálható e egy tömbben
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
Eldontes(10, 1);
