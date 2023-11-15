var lesDivs = document.getElementsByName("lesdivs");

for (var i = 0; i < lesDivs.length; i++) {

    lesDivs[i].addEventListener("mouseover", function () {
        this.textContent = "hello";
    });

    lesDivs[i].addEventListener("mouseout", function () {
        this.textContent = "coucou";
    });
}