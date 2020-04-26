// $(function(){
//       $("#footer").load("footer.html");
//     });
let request = new XMLHttpRequest();
let url = "footer.html";
request.open("GET", url, true);
request.onload = function() {
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML =
        this.responseText;
      } 
    };
    request.send();
  }
