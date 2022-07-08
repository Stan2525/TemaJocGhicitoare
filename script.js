const labelHint = document.getElementById("hint");
const buttonGhicest = document.getElementById("ghiceste");
const input = document.getElementById("input");
const labelMaiIncearca = document.getElementById("maiIncearca");

// Definim un array cu fructe, fiecare fruct fiind cuvantul pe care dorim sa il ghicim
const fructe = ["mere", "pere", "prune"];

// Hinturi pentru fiecare fruct
const hinturiMere = [
  "Sunt rotunde si au culori multiple.",
  "Sunt facute de mar",
];

const hinturiPere = [
  "Sunt neregulate ca forma si au culori multiple.",
  "Sunt facute de par",
];

const hinturiPrune = [
  "Sunt ovale si de obicei sunt mov.",
  "Sunt facute de prun",
];

const returneazaElementAleatorDinArray = (array) => {
  const random = Math.random();
  // Exemple cu explicatii pentru random
  console.log("Math.random: ", random);
  console.log("Math.random (0 - 10), fara 10)", random * 10);
  console.log("Math.floor(random * 10)", Math.floor(random * 10));

  // logica de selectie a elementului pentru un array trimis ca parametru in functie
  const indiceAleator = Math.floor(Math.random() * array.length); // Math.random() returneaza un numar random intre [0, 1), unde 1 nu este inclus.
  // Daca dorim ca numarul sa fie intre 0 si n, atunci inmultim cu n. In cazul nostru dorim ca numarul sa fie aleator intre 0 si array.length
  return array[indiceAleator]; // selectam elementul in functie de indicele aleator
};

const returneazaHintAleatorBazatPeFruct = (fruct) => {
  if (fruct === "mere") {
    return returneazaElementAleatorDinArray(hinturiMere);
  } else if (fruct === "pere") {
    return returneazaElementAleatorDinArray(hinturiPere);
  } else if (fruct === "prune") {
    return returneazaElementAleatorDinArray(hinturiPrune);
  }
};

const PREFIX_HINT = "Hint: ";
const fructAleator = returneazaElementAleatorDinArray(fructe);

const verificaRaspuns = () => {
  const raspuns = input.value; // luam valoarea din input field

  if (raspuns.toLowerCase() === fructAleator.toLowerCase()) {
    alert("Ai castigat!");

    // Din moment ce am castigat, putem reseta valorile campurilor pentru a juca in continuare
    input.value = "";
    labelMaiIncearca.textContent = "";

    // TODO: Ar fi super sa se reseteze tipul de fruct si hinturile acestuia dupa ce am castigat
    // TODO: Reset fruct si hint
  } else {
    labelMaiIncearca.textContent = "Ai gresit! Mai incearca!";
    // TODO: Reset hint
  }
};

const clickEvent = () => {
  verificaRaspuns();
};

const keyDownEvent = (event) => {
  // Dorim sa se verifice raspunsul introdus doar la tasta Enter, nu indiferent de tasta apasata.
  if (event.code === "Enter") {
    verificaRaspuns();
  }
};

// Adaugam un listener (o metoda ce e apelata) pentru un eveniment. Pentru buton am ales evenimentul click
buttonGhicest.addEventListener("click", clickEvent);
// Adaugam un listener (o metoda ce e apelata) pentru un eveniment. Pentru input am ales evenimentul keydown, care se refera la apasarea oricarei taste
input.addEventListener("keydown", keyDownEvent);
// Rescriem textul din label pentru fiecare hint
labelHint.textContent =
  PREFIX_HINT + returneazaHintAleatorBazatPeFruct(fructAleator);
