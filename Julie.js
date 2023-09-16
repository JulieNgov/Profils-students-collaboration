const mediaQuery = window.matchMedia('(max-width:1200px)' || '(orientation: portrait)' || '(max-height:698px)')

function ppProfil() {
    if(mediaQuery.matches){
        let x = (document.getElementsByClassName("profil"))[0];
        if (window.getComputedStyle(x).visibility === "hidden") {
          x.style.visibility = "visible";
        } else {
           x.style.visibility = "hidden";
        }
    }
}

function somFonction() {
    if(mediaQuery.matches){
        let a = (document.getElementById("sommaire"));
        let b = (document.getElementsByClassName("barre-navig"))[0];
        if (window.getComputedStyle(b).visibility === "hidden") {
        //   a.style.left = "90%";
          b.style.visibility = "visible";
          console.log("1");
        } else {
        //    a.style.left = "0%";
           b.style.visibility = "hidden";
           console.log("2");
        }
    }
    else {
        console.log("3");
    }
}