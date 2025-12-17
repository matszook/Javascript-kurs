// ---------------- Oppgave 1 ----------------
document.getElementById("sjekkBtn").addEventListener("click", () => {
  const alder = parseInt(document.getElementById("alder").value);
  const trafikalt = document.getElementById("trafikalt").checked;
  const svar = document.getElementById("svar");

  if (isNaN(alder)) {
    svar.textContent = "Skriv inn alderen din først!";
    return;
  }

  if (alder >= 25) {
    svar.textContent = "Ja, du kan øvelseskjøre uten trafikalt grunnkurs.";
  } else if (alder >= 16 && trafikalt) {
    svar.textContent = "Ja, du kan øvelseskjøre.";
  } else {
    svar.textContent = "Nei, du kan ikke øvelseskjøre enda.";
  }
});

// ---------------- Oppgave 2 ----------------
document.getElementById("sendInn").addEventListener("click", () => {
  const henvendelse = {
    navn: document.getElementById("navn").value,
    epost: document.getElementById("epost").value,
    tema: document.getElementById("tema").value,
    melding: document.getElementById("melding").value
  };
  document.getElementById("resultat").textContent =
    "Henvendelse mottatt:\n" + JSON.stringify(henvendelse, null, 2);
});

// ---------------- Oppgave 3 (BONUS: kun JS) ----------------
const oppg3 = document.getElementById("oppgave3");
const brukernavn = document.createElement("input");
brukernavn.placeholder = "Brukernavn";
const passord = document.createElement("input");
passord.type = "password";
passord.placeholder = "Passord";
const knapp = document.createElement("button");
knapp.textContent = "Logg inn";
const melding = document.createElement("p");

oppg3.append(brukernavn, passord, knapp, melding);

knapp.addEventListener("click", () => {
  if (passord.value === "1234" || passord.value.toLowerCase() === "passord") {
    melding.textContent = "Dårlig passord!";
  } else {
    melding.textContent = `Velkommen, ${brukernavn.value || "ukjent"}!`;
  }
});

// ---------------- Oppgave 4 ----------------
const output4 = document.getElementById("oppg4");
output4.textContent += "Uten løkke:\n" + [1,2,3,4,5,6,7,8,9,10].join(", ") + "\n\n";

output4.textContent += "Med for-løkke:\n";
for (let i = 1; i <= 10; i++) output4.textContent += i + " ";
output4.textContent += "\n\n";

output4.textContent += "Med while-løkke:\n";
let j = 1;
while (j <= 10) {
  output4.textContent += j + " ";
  j++;
}

// ---------------- Oppgave 5 ----------------
document.getElementById("visTall").addEventListener("click", () => {
  const tall = parseInt(document.getElementById("maxTall").value);
  const ut = document.getElementById("tallUt");
  ut.textContent = "";
  if (isNaN(tall) || tall < 1) {
    ut.textContent = "Skriv inn et gyldig tall større enn 0.";
    return;
  }
  for (let i = 1; i <= tall; i++) {
    ut.textContent += i + " ";
  }
});

// ---------------- Oppgave 6 ----------------
const person = {
  navn: "Ola Nordmann",
  alder: 30,
  bosted: "Oslo",
  hobby: "Fotball"
};

const infoDiv = document.getElementById("personInfo");
for (let key in person) {
  infoDiv.innerHTML += `<p><b>${key}:</b> ${person[key]}</p>`;
}

// ---------------- Oppgave 7 ----------------
document.getElementById("lagPassord").addEventListener("click", () => {
  const ord = prompt("Skriv inn et ord: ");
  if (!ord) return;

  let passord = "";
  for (let bokstav of ord) {
    if (bokstav === "e") bokstav = "3";
    else if (bokstav === "i") bokstav = "1";
    else if (bokstav === "o") bokstav = "0";
    passord += Math.random() > 0.5 ? bokstav.toUpperCase() : bokstav.toLowerCase();
  }
  const tegn = ["!", "?", "#", "$", "%", "&"];
  passord += tegn[Math.floor(Math.random() * tegn.length)];

  document.getElementById("passordResultat").textContent = "Ditt passord: " + passord;
});

// ---------------- Oppgave 8 ----------------
document.getElementById("lagPyramide").addEventListener("click", () => {
  const rader = parseInt(document.getElementById("rader").value);
  const p = document.getElementById("pyramide");
  p.textContent = "";
  if (isNaN(rader) || rader < 1) {
    p.textContent = "Skriv inn et gyldig antall rader.";
    return;
  }
  for (let i = 1; i <= rader; i++) {
    p.textContent += " ".repeat(rader - i) + "*".repeat(2 * i - 1) + "\n";
  }
});