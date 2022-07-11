const labelHint = document.getElementById("hint");
const buttonGhicest = document.getElementById("ghiceste");
const input = document.getElementById("input");
const labelMaiIncearca = document.getElementById("maiIncearca");

// Definim un array cu fructe, fiecare fruct fiind cuvantul pe care dorim sa il ghicim
const animale = ["caine", "pisica", "porc", "sarpe"];

// Hinturi pentru fiecare fruct
const hinturiCaine = [
  "Omul ii este cel mai bun prieten!",
  "Ii place sa manance oase!", 
  "Apara gospodaria omului!",
];

const hinturiPisica = [
  "Este un animal agil!",
  "Are gheare ascutite!",
  "Vaneaza soareci!",
  "Stie sa se furiseze!",
];

const hinturiPorc = [
  "Animal crescut pentru carnea sa!",
  "Animal taiat de Craciun!" ,
  "Coada sa arata ca un tirbuson!",
]
const hinturiSarpe = [
  "Reptila cu solzi, fara membre!",
  "Reptila care nu isi mesteca hrana!",
  "Reptila care poate fi veninoasa!",
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

const returneazaHintAleatorBazatPeAnimal = (animal) => {
  if (animal === "caine") {
    return returneazaElementAleatorDinArray(hinturiCaine);
  } else if (animal === "pisica") {
    return returneazaElementAleatorDinArray(hinturiPisica);
  } else if (animal === "porc") {
    return returneazaElementAleatorDinArray(hinturiPorc);
  } else if (animal === "sarpe") {
    return returneazaElementAleatorDinArray(hinturiSarpe)
  }
}

const PREFIX_HINT = "Hint: ";
const animalAleator = returneazaElementAleatorDinArray(animale);




 const returneazaHinturiBazatePeAnimal = (animal) => {
  if (animal === "caine") {
    return hinturiCaine.join('\n');
  } else if (animal === "pisica") {
    return hinturiPisica.join('\n');
  } else if (animal === "porc") {
    return hinturiPorc.join('\n');
  } else if (animal === "sarpe") {
    return hinturiSarpe.join('\n');
  }
} 


const verificaRaspuns = () => {
  const raspuns = input.value; // luam valoarea din input field

  if (raspuns.toLowerCase() === animalAleator.toLowerCase()) {
    alert("Ai castigat!");
    
    // Din moment ce am castigat, putem reseta valorile campurilor pentru a juca in continuare
    input.value = "";
    labelMaiIncearca.textContent = "";
    
    window.location.reload();

  } else {
    labelMaiIncearca.textContent = "Ai gresit! Mai incearca!";
     // labelHint.textContent= PREFIX_HINT + returneazaHintAleatorBazatPeAnimal(animalAleator);
    labelHint.textContent= PREFIX_HINT +  returneazaHinturiBazatePeAnimal(animalAleator);
    
    
     // setTimeout(function(){
    // window.location.reload();
    // }, 2500);

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
  PREFIX_HINT + returneazaHintAleatorBazatPeAnimal(animalAleator);
