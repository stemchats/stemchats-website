function loadFooter() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footerHTML").innerHTML =
        this.responseText;
      }
    };
    request.open("GET", "/footer.html", true);
    request.send();
  }

function loadHeader() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML =
        this.responseText;
      }
    };
    request.open("GET", "/header.html", true);
    request.send();
  }

loadFooter();
loadHeader();




//arrow: black --> transparent
window.addEventListener("scroll", function() {
  var arrow = document.querySelector("arrow");
  arrow.classList.toggle("gone", window.scrollY > 50);
})