function NavMenu() {
    let x = document.getElementById("sidenav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }