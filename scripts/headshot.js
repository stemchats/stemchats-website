//data structures
let membersObj = [
        //execs
        {
          name: "Minh Phuc Tran",
          position: "Founder & CEO",
          home: "Louisville, KY",
          src: "MinhPhucTran.jpg",
          bio:"Minh is a social entrepreneur and a rising second-year student double majoring in Computer Science and Sociology at the University of San Francisco in the Bay Area. He started STEMchats because as a first-generation & low-income student, he personally understood how difficult it was for disadvantaged communities to have access to a quality STEM education. In addition to educational equity, he is also passionate about using technology to build products for social good. In his free time, he enjoys picking up hip-hop & k-pop choreographies, using public transportation, and learning new languages.",
         },
        { name: "Nicole Felix-Tovar", position: "VP of Programming", src: "NicoleFelixTovar.jpg" },
        { name: "Sasha Kolesnikov", position: "VP of Biz-Development", src: "SashaKolesnikov.jpg" },
        //leads
        { name: "Katrina Orevillo", position: "Marketing Lead", src: "KatrinaOverillo.jpg" },
        { name: "Joseph Chiang", position: "Technology Lead", src: "JosephChiang.jpg" },
        { name: "Mahir Rahman", position: "Program Lead", src: "MahirRahman.jpg" },
        { name: "Alexej Latimer", position: "Program Lead", src: "AlexejLatimer.jpg" },
        { name: "Sidra Nadeem", position: "Program Lead", src: "SidraNadeem.jpg" },
        { name: "Ege Yalcindag", position: "Program Lead", src: "EgeYalcindag.jpg" },
        { name: "Sanja Kirova", position: "Program Lead", src: "SanjaKirova.jpg" },
        { name: "Jasmine Li", position: "Program Lead", src: "JasmineLi.jpg" },
        { name: "Amel Saied-Hassan", position: "Program Lead", src: "AmelSaiedHassan.jpg" },
        //coords
        { name: "Anum Ahmad", position: "Marketing Coordinator", src: "AnumAhmad.jpg" },
        { name: "Snoe Castillo", position: "Marketing Coordinator", src: "SnoeCastillo.jpg" },
        { name: "Vivienne Nguyen", position: "Marketing Coordinator", src: "VivienneNguyen.jpg" },
        { name: "Manvir Bhandal", position: "Development Coordinator", src: "ManvirBhandal.jpg" },
        { name: "Eleanor Liu", position: "Development Coordinator", src: "EleanorLiu.jpg" },
        { name: "Alexa Ramirez", position: "Funding Coordinator", src: "AlexaRamirez.jpg" },
        { name: "Taruni Tangirala", position: "Technology Coordinator", src: "TaruniTangirala.jpg" },
        { name: "Justin Lin", position: "Program Coordinator", src: "JustinLin.jpg" },
        { name: "Eliza Martin", position: "Program Coordinator", src: "ElizaMartin.jpg" },
        { name: "Hana Memon", position: "Program Coordinator", src: "HanaMemon.jpg" },
        { name: "Anusha Puri", position: "Program Coordinator", src: "AnushaPuri.jpg" },
        { name: "Sekinat Aliu", position: "Program Coordinator", src: "SekinatAliu.jpg" },
        { name: "Lauren Chong", position: "Program Coordinator", src: "LaurenChong.jpg" },
        { name: "Amanda Edwards", position: "Program Coordinator", src: "AmandaEdwards.jpg" },
        { name: "Lucia Paulsen", position: "Program Coordinator", src: "LuciaPaulsen.jpg" },
        { name: "Karthik Iyer", position: "Program Coordinator", src: "KarthikIyer.jpg" },
        { name: "Sonali Joshi", position: "Program Coordinator", src: "SonaliJoshi.jpg" },
        { name: "Mary Laplante", position: "Program Coordinator", src: "MaryLaplante.jpg" },
        { name: "Bianca Luansing", position: "Program Coordinator", src: "BiancaMoniqueLuansing.jpg" },
        { name: "Carina Ly", position: "Program Coordinator", src: "CarinaLy.jpg" },
        { name: "Estrella Popoca", position: "Program Coordinator", src: "EstrellaPopoca.jpg" },
        { name: "Isabella Siu", position: "Program Coordinator", src: "IsabellaSiu.jpg" },
        { name: "Patricia Wei", position: "Program Coordinator", src: "PatriciaWei.jpg" },
        { name: "David Zhou", position: "Program Coordinator", src: "DavidZhou.jpg" },
        { name: "Natalie Zhou", position: "Program Coordinator", src: "NatalieZhou.jpg" },
        { name: "Swan Yee Aung", position: "Program Coordinator", src: "SwanYeeAung.jpg" },
        { name: "Ayo Bravo", position: "Program Coordinator", src: "AyoBravo.jpg" },
        { name: "Michael Coyle", position: "Program Coordinator", src: "MichaelCoyle.jpg" },
        { name: "Lola Rustamova", position: "Program Coordinator", src: "LolaRustamova.jpg" },
        { name: "Teddy Smith", position: "Program Coordinator", src: "TeddySmith.jpg" },
        { name: "Haoren Wen", position: "Program Coordinator", src: "HaorenWen.jpg" },
        { name: "Amy Xi", position: "Program Coordinator", src: "AmyXi.jpg" },
        { name: "Sarah Young", position: "Program Coordinator", src: "SarahYoung.jpg" },
        { name: "Carson Bohl", position: "Program Coordinator", src: "CarsonBohl.jpg" },
        { name: "Angela Easterling", position: "Program Coordinator", src: "AngelaEasterling.jpg" },
        { name: "Abigail Jiang", position: "Program Coordinator", src: "AbigailJiang.jpg" },
        { name: "Daniel Low", position: "Program Coordinator", src: "DanielLow.jpg" },
        { name: "Grace Pluemacher", position: "Program Coordinator", src: "GracePluemacher.jpg" },
        { name: "Tatum Wilhelm", position: "Program Coordinator", src: "TatumWilhelm.jpg" }
];

let url = "/images/headshots/";

//create all the team members
createMembers = () => {
  membersObj.forEach(function(value, i) {
    //create card
    createCard = () => {
      divOne = document.createElement("div");
      divOne.className="col-md-4";
      divTwo = document.createElement("div");
      divTwo.className="card teamcard";
      img = document.createElement("img");
      img.className="modal-trigger card-img-top teamcard-img";
      img.setAttribute("alt", "Card image cap");
      img.setAttribute("src", url + membersObj[i].src);
      img.setAttribute("data-modal-id", "modal0" + i); // the specific modal trigger
      divThree = document.createElement("div");
      divThree.className="card-body teamcard-body";
      title = document.createElement("h3");
      title.className="card-title teamcard-title";
      title.textContent = membersObj[i].name;
      desc = document.createElement("h3");
      desc.className="card-text teamcard-description";
      desc.textContent = membersObj[i].position;
      divThree.appendChild(title);
      divThree.appendChild(desc);
      divTwo.appendChild(img);
      divTwo.appendChild(divThree);
      divOne.appendChild(divTwo);
      return divOne;
    }
    //create modal
    // createModal = () => {
    //   divOne = document.createElement("div");
    //   divOne.id="modal0"+i; //the specific modal id
    //   divOne.className("")
    // }
    team.appendChild(createCard());
  });
}



// <div class = "col-md-4">
//        <div class="card teamcard">
//          // <a id="modal" data-toggle="modal" data-target="#modal-popup">
//            <img class="modal-trigger card-img-top teamcard-img" src="MinhPhucTran.jpg" alt="Card image cap">
//            <div class="card-body teamcard-body">
//                <h3 class="card-title teamcard-title">Minh Phuc Tran</h3>
//                <p class="card-text teamcard-description">Founder & CEO</p>
//            </div>
//          // </a>
//        </div>
//      </div>

       //modal trigger code - work on later
       // const modalTriggers = document.querySelectorAll(".modal-trigger");
       // modalTriggers.forEach(modalTrigger => {
       //   modalTrigger.addEventListener("click", clickEvent => {
       //     const trigger = clickEvent.target;
       //     const modalId = trigger.getAttribute("data-modal-id");
       //     openModal(modalId);
       //   });
       // });




    window.onload = createMembers();
