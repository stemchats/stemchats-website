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

      // if(i==0||i==1) {
      // attributes[0][i] = document.createElement(attributes[1][i]);
      // attributes[0][i].className = attributes[2][i];
      //  if(i==0) {
      //     loadExec.appendChild(attributes[0][i]);
      //   } else if(i==1){
      //     attributes[0][i-1].appendChild(attributes[0][i]);
      //   }
      // } else if(i>1 && i<attributes[0].length) {  //if iterator value is between 2-6
      //   for(let k=0;k<executives[0].length;k++) { //for each executive value, run the code below
      //     attributes[0][i] = document.createElement(attributes[1][i]);
      //     if(i<5) { // for i values 2,3,4. applies next 4 sets of classes to respective elements
      //       attributes[0][i].className = attributes[2][i];
      //       attributes[0][i-1].appendChild(attributes[0][i]); //append created element in the parent element (element before it in the array)
      //     } else if(i==5||i==6) { //for i values 5,6 (h3, p)
      //       attributes[0][i].className = attributes[2][i];
      //       attributes[0][4].appendChild(attributes[0][i]);
      //     }
      //           attributes[0][i].innerHTML = executives[0][k];
      //           attributes[0][i].innerHTML = executives[1][k];
      //
      //     }
      //
      //   }



function loadLeads() {

}
function loadCoordinators(){

}
//     let pokeList = document.getElementById('pokelist');
//
//     //Creates rows
//     // let row = document.createElement('div');
//     // row.className = "row";
//     // pokeList.appendChild(row);
//
//     let row = null;
//
//     let pokemonCounter = 0;
//
//     if(request.status >= 200 && request.status < 400 ){
//         data.results.forEach(pokemon => {
//
//             if(pokemonCounter % 4 == 0){
//                 row = document.createElement('div');
//                 row.className = "row";
//                 pokeList.appendChild(row);
//             }
//
//
//
//             let card = document.createElement('div');
//             card.className = "col-3 pokemon";
//
//             let p = document.createElement('p');
//             p.textContent = pokemon.name;
//             card.appendChild(p);
//             row.appendChild(card);
//             pokemonCounter++;
//         });
//
//
//     }
// };
