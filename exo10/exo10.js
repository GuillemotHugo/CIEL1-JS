var cptclick = 0;
var cptover = 0;

var Methode1 = document.getElementById("Met1");
Methode1.addEventListener("click", CompteurDeClick);
Methode1.addEventListener("mousedown", ClickOn);
Methode1.addEventListener("mouseup", ClickOff);

var Methode2 = document.getElementById("Met2");
Methode2.addEventListener("keydown", LecteurDeTouche);

var Methode3 = document.getElementById("Met3");
Methode3.addEventListener("mouseover", CompteurDeOver);
Methode3.addEventListener("mouseover", SurvoleOn);
Methode3.addEventListener("mouseout", SurvoleOff);




function CompteurDeClick(evenement) {
    cptclick++;
    evenement.target.innerHTML = "Tu as cliqué ici " + cptclick + " fois";
}

function ClickOn(evenement) {
    Methode1.classList.remove("divD");
    Methode1.classList.add("divA");
}

function ClickOff(evenement) {
    Methode1.classList.remove("divA");
    Methode1.classList.add("divD");
}

function LecteurDeTouche(evenement) {
    evenement.target.innerHTML = "Tu as appuyé sur " + evenement.key;
}

function CompteurDeOver(evenement) {
    cptover++;
    evenement.target.innerHTML = "Tu as passé ici " + cptover + " fois";
}

function SurvoleOn(evenement) {
    Methode3.style.display = "none";
}

function SurvoleOff(evenement) {
    Methode3.style.display = "block";
}