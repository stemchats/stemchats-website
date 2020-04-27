new WOW().init();
  function loadFooter() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML =
        this.responseText;
      }
    };
    request.open("GET", "/footer.html", true);
    request.send();
  }
loadFooter();
