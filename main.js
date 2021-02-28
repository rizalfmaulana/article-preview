var x = document.getElementById("active");

x.addEventListener("click", function () {
  var y = document.getElementById("popup");
  if (y.style.display == "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
});
