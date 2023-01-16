function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function sethome() {
  var home = localStorage.getItem("home");
  window.location.href = home;
}
function setbookmarks() {
  var bookmarks = localStorage.getItem("bookmarks");
  window.location.href = bookmarks;
}
function setsettings() {
  var settings = localStorage.getItem("settings");
  window.location.href = settings;
}

var groceries = [
'milk',
'coriander',
'cucumber',
'eggplant'
]

function run() {
let mygroceries = groceries[Math.floor(Math.random() * groceries.length)]
document.getElementById("subtitle").innerText = mygroceries;
  console.log(mygroceries)
}
