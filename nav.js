window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function myDownload() {
  var yakin = confirm("Yakin ingin mendownload?");
  if (yakin) {
    window.location = "https://valorant.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.live.eu.exe";
  }
  else {
    alert("Coba lagi")
  }
}
