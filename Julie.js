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