let executives = [
  ["Minh Phuc Tran", "Nicole Felix-Tovar", "Sasha Kolesnikov"], //names
  ["Founder & CEO", "VP of Programming", "VP of Biz-Development"] //positions
];
let leads = [
  [],
  []
];
let coordinators = [
  [],
  []
];

// function setAttributes(element, value) {
//   for(let key in attrs) {
//     element.setAttribute(key, attrs[key])
//   }
// }
setAttributes = (element, value)=> {
  for(let key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
}

loadExecutives = () => {
  //define the html elements
  let collapseShow;
  let cardBody;
  let row;
  let column;
  let teamCard;
  let cardImg;
  let cardBody;
  let cardTitle;
  let cardText;
  collapseShow = document.createElement("div");
  setAttributes(collapseShow, {"id": "collapseOne", "class": "collapse show", "aria-labelledby": "headingOne", "data-parent": "#accordionExample"});
  cardBody = document.createElement("div");
  setAttributes(cardBody, {"class": "card-body"});
  row = document.createElement("div");
  setAttributes(row, {"class": "row"});
  //repeatable parts
  for(let i=0; i<executives[0].length; i++) => {
    column = document.createElement("div");
    setAttributes(column, {"class": "col-md-4"});
    teamCard = document.createElement("div");
    setAttributes(teamCard, {"class": "card teamcard", "style"= "width": "100%"});
    cardImg = document.createElement("img");
    setAttributes(cardImg, {"class": "card-img-top teamcard-img", "src": "/images/headshots/MinhPhucTran.jpg", "alt": "Card image cap"});
    cardBody = document.createElement("div");
    setAttributes(cardBody, {"class": "card-body teamcard-body"});
    cardTitle = document.createElement("h3");
    setAttributes(cardTitle, {"class": "card-title teamcard-title"});
    cardTitle.textContent=executives[0][i];
    cardText = document.createElement("p");
    setAttributes(cardText, {"class": "card-text teamcard-description"});
    cardText.textContent=executives[1][i];
  });
}

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
