var maDiv = document.getElementById("MaDivNum1");

maDiv.addEventListener("mouseover", function () {
    maDiv.textContent = "hello";
});

maDiv.addEventListener("mouseout", function () {
    maDiv.textContent = "coucou";
});
