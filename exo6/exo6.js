var n = prompt("Entre un nombre je vais calculer son factoriel :");
var intValue = parseInt(n, 10);
var r = 0
for (i = intValue; i > 0; i--) {
    r = r + i;
}

alert(" le factoriel de " + intValue + " est " + r);