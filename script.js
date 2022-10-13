let nav = document.getElementsByTagName("nav");
"nav".innerHTML = "Hello JavaScript";



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }