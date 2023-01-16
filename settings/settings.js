function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
function sethome() {
  var home = localStorage.getItem("home");
  document.write(home);
}

var title = localStorage.getItem("favicon");
alert(title)

cleartitle = "Obvious Play"
clearimage = ""