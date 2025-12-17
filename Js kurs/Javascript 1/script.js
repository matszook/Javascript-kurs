//#Oppgave 1
let message = "Hello World!";
console.log(message);

//Oppgave 2
let navn = "Mats"
console.log("Hei " + navn)

//#Oppgave 3
let radius = 4
let pi = 3.14;
let omkrets = 2 * radius * pi;
console.log("For radius " + radius + " er omktretsen " + omkrets)

//#Oppgave 4
const person = {
  fornavn: "Mats",
  etternavn: "Hypher",
  alder: 17,
  bursdag: "29. juli",
  over18: false,
  favorittFarge: "blå"
};

console.log(person)

console.log("Hallo " + person.fornavn + " " + person.etternavn);

//#Oppgave 5
const fulltNavn = person.fornavn + " " + person.etternavn;
const antallBokstaver = fulltNavn.replace(/\s/g, "").length;

console.log(`Hallo ${fulltNavn}. Ditt navn har ${antallBokstaver} bokstaver.`);

//#Oppgave 6
console.log(`Hei, mitt navn er ${person.fornavn} ${person.etternavn}. 
    Jeg er ${person.alder} år gammel og har bursdag ${person.bursdag}. 
    Min favorittfarge er ${person.favorittFarge}.`);

//#Oppgave 7

const tall1 = Number(prompt("Vennligst oppgi det første tallet:"));
const tall2 = Number(prompt("Vennligst oppgi det andre tallet:"));

if (tall1 > tall2) {
  console.log(`${tall1} er større enn ${tall2}.`);
} else if (tall2 > tall1) {
  console.log(`${tall2} er større enn ${tall1}.`);
} else {
  console.log(`Begge tallene er like (${tall1}).`);
}

//#Oppgave 8
const alder = Number(prompt("Vennligst oppgi alderen din:"));

if (alder >= 18) {
  console.log("Du er kvalifisert til å stemme.");
} else {
  console.log("Du er ikke kvalifisert til å stemme ennå.");
}

//#Oppgave 9
const passord = prompt("Vennligst skriv inn passordet");

if (passord === "Passord123") {
  console.log("Tilgang innvilget");
  } else {
    console.log("Tilgang nektet");
    }

//#Oppgave 10
const now = new Date();
const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();

if (day === 5) {
  if (hour === 15 && minute === 30) {
    console.log("God helg – sees på mandag!");
  } else {
    console.log("Det er fredag!");
  }
} else {
  console.log("Det er ikke fredag ennå.");
}

//#Oppgave 11
let klikkTeller = 0;

function handleOnClick() {
  klikkTeller++;
  document.getElementById("resultat").textContent = "Antall klikk: " + klikkTeller;
}

//#Oppgave 12
function endreBakgrunn(farge) {
  document.body.style.backgroundColor = farge;
}

//#Oppgave 13

const writeTextBtn = document.getElementById('writeTextBtn');
const textDisplay = document.getElementById('textDisplay');
const fontSelect = document.getElementById('fontSelect');
const fontSize = document.getElementById('fontSize');
const fontColor = document.getElementById('fontColor');
const bgColor = document.getElementById('bgColor');

writeTextBtn.addEventListener('click', () => {
  const userText = prompt('Skriv inn teksten din:');
  if (userText !== null && userText.trim() !== '') {
    textDisplay.textContent = userText;
  }
});

fontSelect.addEventListener('change', () => {
  textDisplay.style.fontFamily = fontSelect.value;
});

fontSize.addEventListener('input', () => {
  textDisplay.style.fontSize = fontSize.value + 'px';
});

fontColor.addEventListener('input', () => {
  textDisplay.style.color = fontColor.value;
});

bgColor.addEventListener('input', () => {
  textDisplay.style.backgroundColor = bgColor.value;
});