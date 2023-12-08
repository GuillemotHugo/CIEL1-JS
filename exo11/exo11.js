var MaDiv = document.getElementById("div1");
MaDiv.addEventListener("click", test);

function test(evenement) {
    fetch(
        "http://192.168.65.211/ne_pas_enlever/exo11.json",
        {method : 'GET'}
        ).then(
            response => response.json()
        ).then(
            response2 =>evenement.target.innerHTML = JSON.stringify(response2)
        ).catch(error => console.log("erreur : "+ error));
}scroll