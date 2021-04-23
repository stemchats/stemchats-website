/* NOTE: This script file has been linked to the get-involved page, however, since we are not launching this feature yet,
please push to the separate branch called "test" */

// generate cards








// create modal popup
// AOS.init({
//     // offset: 200, // offset (in px) from the original trigger point

//     easing: 'ease-in-out', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });
// const url = "/images/headshots/";
const opportunities = document.getElementById("opportunities");
// const department = document.getElementById("department");
const animate = document.getElementById("opportunities_container");

//create all the team members
createOpportunities = (opps) => {
  opps.forEach(function(value, i) {
    //create card
    createCard = () => {
      divOne = document.createElement("div");
      divOne.className="col-md-8 center";
      divTwo = document.createElement("div");
      divTwo.className="card oppcard";
    //   img = document.createElement("img");
    //   img.className="modal-trigger card-img-top teamcard-img";
	// 		img.setAttribute("onClick", "removeAnimate()"); // remove aos animation/styling for modals
    //   img.setAttribute("alt", opps[i].name);
    //   img.setAttribute("data-toggle", "modal");
    //   img.setAttribute("src", url + opps[i].src);
    //   img.setAttribute("data-target", "#modal" + i); // the specific modal trigger
	// 		img.setAttribute("loading", "lazy");
      divThree = document.createElement("div");
      divThree.className="card-body oppcard-body";
      title = document.createElement("h3");
      title.className="card-title oppcard-title";
      title.textContent = opps[i].title;
      desc = document.createElement("h3");
      desc.className="card-text oppcard-description";
      desc.textContent = opps[i].category;
      divThree.appendChild(title);
      divThree.appendChild(desc);
    //   divTwo.appendChild(img);
      divTwo.appendChild(divThree);
      divOne.appendChild(divTwo);
      return divOne;
    }
    //create modal
    createModal = () => {
      modal = document.createElement("div");
      modal.id="modal"+i; //the specific modal id
      modal.className="modal fade";
      modal.setAttribute("tabindex", "-1");
      // modal.setAttribute("role", "dialog");
      modal.setAttribute("data-backdrop", "static");
      modal.setAttribute("data-keyboard", "false");
      modal.setAttribute("aria-labelledby", "Modal-label");
      modal.setAttribute("aria-hidden", "true");
      modalDialog = document.createElement("div");
      modalDialog.className="modal-dialog modal-dialog-centered";
      // divTwo.setAttribute("role","document");
      modalContent = document.createElement("div");
      modalContent.className="modal-content";
      modalHeader = document.createElement("div");
      modalHeader.className="modal-header";
      button = document.createElement("button");
      button.className="close";
			button.setAttribute("onclick", "addAnimate()"); //add aos animation/styling again after exiting modal
      button.setAttribute("type", "button");
      button.setAttribute("data-dismiss", "modal");
      button.setAttribute("aria-label", "Close");
      span = document.createElement("span");
      span.setAttribute("aria-hidden", "true");
      span.innerHTML="&times;"
      button.appendChild(span);
      modalHeader.appendChild(button);
      modalBody=document.createElement("div");
      modalBody.className = "modal-body";
      container=document.createElement("div");
      container.className="container-fluid";
      row=document.createElement("div");
      row.className = "row";
      col1=document.createElement("div");
      col1.className="col-md-8 my-auto mx-auto";
    //   img=document.createElement("img");
    //   img.className="img-fluid";
    //   img.setAttribute("alt",opps[i].title);
    //   img.setAttribute("src", url+opps[i].src);
    //   col1.appendChild(img);
      row.appendChild(col1);
      col2=document.createElement("div");
      col2.className="left col-lg-6 my-auto";
      const name=document.createElement("h3");
      title.className="center name";
    //   category.className = "center category"; 
      //ADDS EXTRA TITLE
    //   nameText = document.createTextNode(opps[i].title);
    //   title.appendChild(nameText);  //create text node + element node for the name
		
      category=document.createElement("p");
      category.className="center";
      category.innerHTML="<strong>" + opps[i].category + "</strong>";
    //   hometown=document.createElement("p");
    //   hometown.className="center";
    //   hometown.textContent="Hometown: ";
    //   home=document.createElement("span");
    //   home.textContent=opps[i].home;
    //   hometown.appendChild(home);
    //   bio=document.createElement("p");
    //   bio.textContent=opps[i].bio;
      col2.appendChild(name);
    //   col2.appendChild(position);
    //   col2.appendChild(hometown);
    //   col2.appendChild(bio);
      row.appendChild(category);
      container.appendChild(row);
      modalBody.appendChild(container);
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalDialog.appendChild(modalContent);
      modal.appendChild(modalDialog);
      return modal;
    }
    opportunities.appendChild(createCard());
    opportunities.appendChild(createModal());
  });
}

//animation on click for the select
// loadAnimate = () => {
// 	animate.style.visibility = "hidden";
// 	// animate.style.display = "none";
// 	window.scrollTo(0, 0);
// 	setTimeout(function() {
// 			animate.classList.remove("aos-animate");
// 			// animate.style.display = "block";
// 				setTimeout(function(){
// 					animate.style.visibility = "visible";
// 					animate.classList.add("aos-animate");
// 				}, 600);
// 		}, 50);
// }

// //remove styling/animation onclick modals
// removeAnimate = () => {
// 	animate.removeAttribute("data-aos");
// }

// //add aos styling/animation after exiting modal
// addAnimate = () => {
// 	setTimeout(function() {
// 		animate.setAttribute("data-aos","fade-up");
// 	}, 200)
// }

// //add the onload delay
// animateOnload = () => {
// 	animate.setAttribute("data-aos-delay", "800");
// 		setTimeout(function() {
// 			animate.removeAttribute("data-aos-delay");
// 		}, 500);
// 	}

// //hide other members
// hide = () => {
// 	team.innerHTML = "";
// }

let opportunitiesObj = [
    {
        title: "Summer Internship Program",
        category: "Internship",
    }, {
        title: "Summer Research Program",
        category: "Research",
    }
];

window.onload = createOpportunities(opportunitiesObj);
// window.onload =	animateOnload();








// collection of card objects
