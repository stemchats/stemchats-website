/* NOTE: This script file has been linked to the get-involved page, however, since we are not launching this feature yet,
please push to the separate branch called "test" */

// generate cards

// function createCards(num) {
//     /* var desc = [];

//     for (var i = editions.length - 1; i >= 0; i--) {
//         var children = editions[i].getElementsByTagName("*");
//         for (var j = 0; j < children.length; j++) {
//             if (children[j].className == "card-text") {
//                 desc[i] = children[j].textContent;
//             }
//         }
//         editions[i].parentNode.removeChild(editions[i]);
//     } */

//     for (var i = 1; i <= num; i++) {
//         var opp = document.createElement('div');
//         opp.classList.add('card', 'modal-trigger', 'oppcard');
//         opp.setAttribute('data-target', '#modal'+(i-1))
//         var body = document.createElement('div');
//         body.classList.add('card-body', 'oppcard-body');
//         opp.appendChild(body);

//         var oppName = document.createElement('h3');
//         oppName.classList.add('card-title', 'oppcard-title')
//         oppName.textContent = "Opportunity " + i;
//         body.appendChild(oppName);

//         var descTxt = document.createElement('p');
//         if (desc[num - i]) {
//             descTxt.textContent = desc[num - i - 1];
//         }
//         body.appendChild(descTxt);

//         opps = document.getElementById("opportunities");
//         opps.appendChild(opp);
//     }
// }






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
    opps.forEach(function (value, i) {
        //create card
        createCard = () => {
            divOne = document.createElement("div");
            divOne.className = "col-md-8 center";
            divTwo = document.createElement("div");
            divTwo.className = "card oppcard";

            // trigger = document.createElement("div");
            divOne.className = "modal-trigger card-img-top teamcard-img";
            // trigger.setAttribute("onClick", "removeAnimate()"); // remove aos animation/styling for modals
            // trigger.setAttribute("alt", opps[i].title);
            divOne.setAttribute("data-toggle", "modal");
            // trigger.setAttribute("src", url + opps[i].src);
            divOne.setAttribute("data-target", "#modal" + i); // the specific modal trigger
            divOne.setAttribute("loading", "lazy");

            divThree = document.createElement("div");
            divThree.className = "card-body oppcard-body";
            title = document.createElement("h3");
            title.className = "card-title oppcard-title";
            title.textContent = opps[i].title;
            desc = document.createElement("h3");
            desc.className = "card-text oppcard-description";
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
            modal.id = "modal" + i; //the specific modal id
            modal.className = "modal fade";
            modal.setAttribute("tabindex", "-1");
            // modal.setAttribute("role", "dialog");
            modal.setAttribute("data-backdrop", "static");
            modal.setAttribute("data-keyboard", "false");
            modal.setAttribute("aria-labelledby", "Modal-label");
            modal.setAttribute("aria-hidden", "true");
            modalDialog = document.createElement("div");
            modalDialog.className = "modal-dialog modal-dialog-centered";
            // divTwo.setAttribute("role","document");
            modalContent = document.createElement("div");
            modalContent.className = "modal-content";
            modalHeader = document.createElement("div");
            modalHeader.className = "modal-header";
            button = document.createElement("button");
            button.className = "close";
            button.setAttribute("onclick", "addAnimate()"); //add aos animation/styling again after exiting modal
            button.setAttribute("type", "button");
            button.setAttribute("data-dismiss", "modal");
            button.setAttribute("aria-label", "Close");
            span = document.createElement("span");
            span.setAttribute("aria-hidden", "true");
            span.innerHTML = "&times;"
            button.appendChild(span);
            modalHeader.appendChild(button);

            modalBody = document.createElement("div");
            modalBody.className = "modal-body";
            container = document.createElement("div");
            container.className = "container-fluid";
            div1 = document.createElement("div");
            // row.className = "row";
            // col1 = documecreateElnt.ement("div");
            // col1.className = "col-md-8 my-auto mx-auto";
            // row.appendChild(col1);
            const titleContainer = document.createElement("h3");
            titleContainer.className = "center name";
            titleContainer.textContent = opps[i].title;
            div1.appendChild(titleContainer);

            category = document.createElement("p");
            category.className = "center";
            category.innerHTML = "<strong>" + opps[i].category + "</strong>";
            div1.appendChild(category);

            div2 = document.createElement("div");
            // rowTwo.className = "row";
            description = document.createElement("p");
            // description.className="center";
            description.textContent = opps[i].description;
            div2.appendChild(description);

            div3 = document.createElement("div");
            img=document.createElement("img");
            img.className="img-fluid center";
            img.setAttribute("alt",opps[i].title);
            img.setAttribute("src", opps[i].src);
            // col1.appendChild(img);
            div3.appendChild(img);

            const app =document.createElement("h6");
            // app.className = "center"; 
            link = "<a href=\"https://" + opps[i].application + "\" target=\"_blank\"><i class=\"btn btn-primary\">Access Application</i></a>";
			app.innerHTML += link;
            div3.appendChild(app);

            div4 = document.createElement("div");
            faq = document.createElement("div"); 
            faq.className = "accordion intern-faq"; 
            div3.appendChild(faq); 

            container.appendChild(div1);
            container.appendChild(div2);
            container.appendChild(div3);
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
        title: "2021 STEMchats Internship Program",
        category: "Internship",
        description: "Thank you for your interest in our Second Annual Internship Program! We encourage you to submit an application to join us this summer! Please make sure to read all parts of the Google Form, the linked Google Docs, and FAQs at the bottom of this page carefully. Please email us at stemchats@stemchats.org if you have any questions! We are excited to provide a summer of engaging and fulfilling work, networking, events, and more as we work towards our mission of shatter barriers in STEM for underrepresented students.",
        src: "/images/internship_shared_workspace.png",
        application: "docs.google.com/forms/d/190P98goeJ2EeC0-GmAsHnR0oW6mm0zfnhnpuX4And_I/viewform?edit_requested=true"
    }
    // }, {
    //     title: "Summer Research Program",
    //     category: "Research",
    //     description: "Testing"
    // }
];

window.onload = createOpportunities(opportunitiesObj);
// window.onload =	animateOnload();








// collection of card objects
