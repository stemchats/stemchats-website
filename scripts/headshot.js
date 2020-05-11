
  //predefined variables for each element of the card
  let column;
  let teamCard;
  let cardImg;
  let teamCardBody;
  let cardTitle;
  let cardText;

  let divElements = [  //divs (repeatable) in each card
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
  let nestedElements = [   //elements inside divs (repeatable) in each card
    {
      tagName: "h3",
      className:"card-title teamcard-title"
    },
    {
      tagName: "p",
      className: "card-text teamcard-description"
    },
    {
      tagName: "img",
      className: "card-img-top teamcard-img"
    }
  ];
//data structures [0] = exec, [1] = leads, [2] = coords
let membersObj=[[{name:"Minh Phuc Tran",position:"Founder & CEO",src:"/images/headshots/MinhPhucTran.jpg"},{name:"Nicole Felix-Tovar",position:"VP of Programming",src:"/images/headshots/NicoleFelixTovar.jpg"},{name:"Sasha Kolesnikov",position:"VP of Biz-Development",src:"/images/headshots/SashaKolesnikov.jpg"}],[{name:"Katrina Overillo",position:"Marketing Lead",src:"/images/headshots/KatrinaOverillo.jpg"},{name:"Joseph Chiang",position:"Technology Lead",src:"/images/headshots/JosephChiang.jpg"},{name:"Mahir Rahman",position:"Program Lead",src:"/images/headshots/MahirRahman.jpg"},{name:"Alexej Latimer",position:"Program Lead",src:"/images/headshots/AlexejLatimer.jpg"},{name:"Sidra Nadeem",position:"Program Lead",src:"/images/headshots/SidraNadeem.jpg"},{name:"Ege Yalcindag",position:"Program Lead",src:"/images/headshots/EgeYalcindag.jpg"},{name:"Sanja Kirova",position:"Program Lead",src:"/images/headshots/SanjaKirova.jpg"},{name:"Jasmine Li",position:"Program Lead",src:"/images/headshots/JasmineLi.jpg"},{name:"Amel Saied-Hassan",position:"Program Lead",src:"/images/headshots/AmelSaiedHassan.jpg"}],[{name:"Anum Ahmad",position:"Marketing Coordinator",src:"/images/headshots/AnumAhmad.jpg"},{name:"Snoe Castillo",position:"Marketing Coordinator",src:"/images/headshots/SnoeCastillo.jpg"},{name:"Vivienne Nguyen",position:"Marketing Coordinator",src:"/images/headshots/VivienneNguyen.jpg"},{name:"Manvir Bhandal",position:"Development Coordinator",src:"/images/headshots/ManvirBhandal.jpg"},{name:"Eleanor Liu",position:"Development Coordinator",src:"/images/headshots/EleanorLiu.jpg"},{name:"Alexa Ramirez",position:"Funding Coordinator",src:"/images/headshots/AlexaRamirez.jpg"},{name:"Taruni Tangirala",position:"Technology Coordinator",src:"/images/headshots/TaruniTangirala.jpg"},{name:"Justin Lin",position:"Program Coordinator",src:"/images/headshots/JustinLin.jpg"},{name:"Eliza Martin",position:"Program Coordinator",src:"/images/headshots/ElizaMartin.jpg"},{name:"Ethan McFarlin",position:"Program Coordinator",src:"/images/headshots/EthanMcFarlin.jpg"},{name:"Hana Memon",position:"Program Coordinator",src:"/images/headshots/HanaMemon.jpg"},{name:"Anusha Puri",position:"Program Coordinator",src:"/images/headshots/AnushaPuri.jpg"},{name:"Sekinat Aliu",position:"Program Coordinator",src:"/images/headshots/SekinatAliu.jpg"},{name:"Lauren Chong",position:"Program Coordinator",src:"/images/headshots/LaurenChong.jpg"},{name:"Amanda Edwards",position:"Program Coordinator",src:"/images/headshots/AmandaEdwards.jpg"},{name:"Lucia Paulsen",position:"Program Coordinator",src:"/images/headshots/LuciaPaulsen.jpg"},{name:"Karthik Iyer",position:"Program Coordinator",src:"/images/headshots/KarthikIyer.jpg"},{name:"Sonali Joshi",position:"Program Coordinator",src:"/images/headshots/SonaliJoshi.jpg"},{name:"Mary Laplante",position:"Program Coordinator",src:"/images/headshots/MaryLaplante.jpg"},{name:"Bianca Luansing",position:"Program Coordinator",src:"/images/headshots/BiancaMoniqueLuansing.jpg"},{name:"Carina Ly",position:"Program Coordinator",src:"/images/headshots/CarinaLy.jpg"},{name:"Estrella Popoca",position:"Program Coordinator",src:"/images/headshots/EstrellaPopoca.jpg"},{name:"Isabella Siu",position:"Program Coordinator",src:"/images/headshots/IsabellaSiu.jpg"},{name:"Patricia Wei",position:"Program Coordinator",src:"/images/headshots/PatriciaWei.jpg"},{name:"David Zhou",position:"Program Coordinator",src:"/images/headshots/DavidZhou.jpg"},{name:"Natalie Zhou",position:"Program Coordinator",src:"/images/headshots/NatalieZhou.jpg"},{name:"Swan Yee Aung",position:"Program Coordinator",src:"/images/headshots/SwanYeeAung.jpg"},{name:"Ayo Bravo",position:"Program Coordinator",src:"/images/headshots/AyoBravo.jpg"},{name:"Michael Coyle",position:"Program Coordinator",src:"/images/headshots/MichaelCoyle.jpg"},{name:"Lola Rustamova",position:"Program Coordinator",src:"/images/headshots/LolaRustamova.jpg"},{name:"Teddy Smith",position:"Program Coordinator",src:"/images/headshots/TeddySmith.jpg"},{name:"Haoren Wen",position:"Program Coordinator",src:"/images/headshots/HaorenWen.jpg"},{name:"Amy Xi",position:"Program Coordinator",src:"/images/headshots/AmyXi.jpg"},{name:"Sarah Young",position:"Program Coordinator",src:"/images/headshots/SarahYoung.jpg"},{name:"Carson Bohl",position:"Program Coordinator",src:"/images/headshots/CarsonBohl.jpg"},{name:"Angela Easterling",position:"Program Coordinator",src:"/images/headshots/AngelaEasterling.jpg"},{name:"Abigail Jiang",position:"Program Coordinator",src:"/images/headshots/AbigailJiang.jpg"},{name:"Daniel Low",position:"Program Coordinator",src:"/images/headshots/DanielLow.jpg"},{name:"Grace Pluemacher",position:"Program Coordinator",src:"/images/headshots/GracePluemacher.jpg"}]];



const exec = document.getElementById("Executives");
const lead = document.getElementById("Leads");
const coord = document.getElementById("Coordinators");
let url = "/images/headshots/";

attachCard = () => {
for(let x=0;x<3;x++) { //run three times for exec, leads, coord
      for(let k=0;k<membersObj[x].length;k++) { //runs everything for x-amount of headshots
        for(let i=0;i<3;i++) { //creates first three divs
          if(i==0){ //if first element, append to loadExec; if second or third element, append to parent element
            column = document.createElement(divElements[i].tagName);
            column.className = divElements[i].className;
            if(x==0) {
              exec.appendChild(column);//append to executives section
            } else if(x==1) {
              lead.appendChild(column); //append to leads section
            } else if(x==2) {
              coord.appendChild(column); //append to coordinators section
            }
          } else if(i==1) { //append img element to teamCard
             teamCard = document.createElement(divElements[i].tagName); //create teamCard element
             teamCard.className = divElements[i].className;
             teamCard.setAttribute("style","width: 100%");
             cardImg = document.createElement(nestedElements[2].tagName); //create cardImg element
             cardImg.className = nestedElements[2].className;
             let src = membersObj[x][k].name.replace(" ")
             cardImg.setAttribute("src", membersObj[x][k].src); //assign proper attributes
             cardImg.setAttribute("alt", "Card image cap");
             teamCard.appendChild(cardImg); //append elements
             column.appendChild(teamCard);
           } else if(i==2) {
             teamCardBody = document.createElement(divElements[i].tagName); //create teamCardBody element
             teamCardBody.className = divElements[i].className;
             cardTitle = document.createElement(nestedElements[0].tagName); //create h3 element
             cardTitle.className = nestedElements[0].className;
             cardTitle.innerText = membersObj[x][k].name;
             cardText = document.createElement(nestedElements[1].tagName); //create p element
             cardText.className = nestedElements[1].className;
             cardText.innerText = membersObj[x][k].position;
             teamCardBody.appendChild(cardTitle); //append h3 element
             teamCardBody.appendChild(cardText); //append p element
             teamCard.appendChild(teamCardBody); //append teamCardBody to teamCard element
          }
        }
      }
    }
   }
   window.onload = attachCard();
