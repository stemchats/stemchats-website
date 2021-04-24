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

      // trigger = document.createElement("div");
      divOne.className="modal-trigger card-img-top teamcard-img";
      // trigger.setAttribute("onClick", "removeAnimate()"); // remove aos animation/styling for modals
      // trigger.setAttribute("alt", opps[i].title);
      divOne.setAttribute("data-toggle", "modal");
      // trigger.setAttribute("src", url + opps[i].src);
      divOne.setAttribute("data-target", "#modal" + i); // the specific modal trigger
      divOne.setAttribute("loading", "lazy");

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
      console.log(opps[i].title);
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
      row.appendChild(col1);
      const titleContainer =document.createElement("h3");
      titleContainer.className="center name";
      titleContainer.textContent=opps[i].title;
      col1.appendChild(titleContainer);
		
      category=document.createElement("p");
      category.className="center";
      category.innerHTML="<strong>" + opps[i].category + "</strong>";
      row.appendChild(category);

      rowTwo = document.createElement("div");
      rowTwo.className = "row";
      description = document.createElement("p");
      // description.className="center";
      description.textContent = opps[i].description; 
      rowTwo.appendChild(description);

      container.appendChild(row);
      container.appendChild(rowTwo);
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
        description: "Testing"
    }, {
        title: "Summer Research Program",
        category: "Research",
        description: "Testing"
    }
];

window.onload = createOpportunities(opportunitiesObj);
// window.onload =	animateOnload();








// collection of card objects
