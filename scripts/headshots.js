  //define names of the variables of the html elements
let column;
let teamCard;
let cardImg;
let teamCardBody;
let cardTitle;
let cardText;

let leads = [
  [],
  []
];
let coordinators = [
  [],
  []
];
let variableNames = [column, teamCard, teamCardBody, cardTitle, cardText];
let divElements = [  //array of each repeatable element as objects
  {
    tagName: "div",
    className: "col-md-4"
  },
  {
    tagName:"div",
    className:"card teamcard"
  },
  {
    tagName: "div",
    className:"card-body teamcard-body"
  }
];
let nestedElements = [
  {
    tagName: "h3",
    className:"card-title teamcard-title"
  },
  {
    tagName: "p",
    className: "card-text teamcard-description"
  }
];
let execObj = [
  {
    name: "Minh Phuc Tran",
    position: "Founder & CEO"
  },
  {
    name: "Nicole Felix-Tovar",
    position: "VP of Programming"
  },
  {
    name: "Sasha Kolesnikov",
    position: "VP of Biz-Development"
  }
];

loadExecutives = () => {
  const exec = document.getElementById("Executives");
  createCard = () => {
    for(let k=0;k<=execObj.length;k++) { //runs everything for x-amount of headshots
    //  console.log(execObj[k].name);
      for(let i=0;i<3;i++) { //creates first three divs
        variableNames[i] = document.createElement(divElements[i].tagName);
        variableNames[i].className = divElements[i].className;
        if(i==0){ //if first element, append to loadExec; if second or third element, append to parent element
          exec.appendChild(variableNames[i]);
        } else if(i>0||i<3) {
          variableNames[i-1].appendChild(variableNames[i]);
        }
      }
          cardTitle = document.createElement(nestedElements[0].tagName); //create h3 element
          cardTitle.className = nestedElements[0].className;
          cardTitle.innerHTML = execObj[k].name;
          teamCardBody.appendChild(cardTitle); //append h3 element

          cardText = document.createElement(nestedElements[1].tagName); //create p element
          cardText.className = nestedElements[1].className;
          cardText.innerHTML = execObj[k].position;
          teamCardBody.appendChild(cardText); //append p element
    }
  }
}
loadExecutives();


function loadLeads() {

}
function loadCoordinators(){

}
//example html
<div class = "col-md-4">
    <div class="card teamcard" style="width: 100%">
        <img class="card-img-top teamcard-img" src="/images/headshots/MinhPhucTran.jpg" alt="Card image cap">
        <div class="card-body teamcard-body">
            <h3 class="card-title teamcard-title">Minh Phuc Tran</h3>
            <p class="card-text teamcard-description">Founder & CEO</p>
        </div>
    </div>
</div>
