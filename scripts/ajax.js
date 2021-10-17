function loadFooter() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("footerHTML").innerHTML =
        this.responseText;
    }
  };
  request.open("GET", "/insertables/footer.html", true);
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
  request.open("GET", "/insertables/header.html", true);
  request.send();
}

loadFooter();
loadHeader();
