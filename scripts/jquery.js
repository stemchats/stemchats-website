// $(function(){
//       $("#footer").load("footer.html");
//     });

$(function(){
  function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
  }
    });
