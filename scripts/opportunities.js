/* NOTE: This script file has been linked to the get-involved page, however, since we are not launching this feature yet,
please push to the separate branch called "test" */

// generate cards

// function createCards(num) {
//     /* var desc = [];

//     for (var i = editions.length - 1; i >= 0; i--) {
//         var children = editions[i].getElementsByTagName("*");
//         for (var j = 0; j < children.length; j++) {
//             if (children[j].className == "card-text") {
//                 desc[i] = children[j].innerHTML;
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
//         oppName.innerHTML = "Opportunity " + i;
//         body.appendChild(oppName);

//         var descTxt = document.createElement('p');
//         if (desc[num - i]) {
//             descTxt.innerHTML = desc[num - i - 1];
//         }
//         body.appendChild(descTxt);

//         opps = document.getElementById("opportunities");
//         opps.appendChild(opp);
//     }
// }



// AOS.init(); //animation
AOS.init({
  // offset: 200, // offset (in px) from the original trigger point

  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


// create modal popup

const opportunities = document.getElementById("opportunities");
const animate = document.getElementById("opportunities_container");
const categories = document.getElementById("categories");
const opps = document.getElementById("opportunities");

//create all the team members
createOpportunities = (opps) => {
  opps.forEach(function(value, i) {
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
      title.innerHTML = opps[i].title;
      cat = document.createElement("h5");
      cat.className = "card-text oppcard-description";
      cat.innerHTML = opps[i].category;
      divFour = document.createElement("div");
      desc = document.createElement("p");
      desc.innerHTML = opps[i].description.substring(0, 130) + "...";

      divFour.appendChild(desc);
      divThree.appendChild(title);
      divThree.appendChild(cat);
      divThree.appendChild(divFour);
      divTwo.appendChild(divThree);
      divOne.appendChild(divTwo);
      console.log(opps[i].title);
      return divOne;
    }
    //create modal
    createModal = () => {
      modal = document.createElement("div");
      modal.id = "modal" + i; //the specific modal id
      modal.className = "modal fade opport";
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
      // row.className = "row";
      // col1 = documecreateElnt.ement("div");
      // col1.className = "col-md-8 my-auto mx-auto";
      // row.appendChild(col1);
      const titleContainer = document.createElement("h2");
      titleContainer.className = "center name";
      titleContainer.innerHTML = opps[i].title;

      category = document.createElement("h5");
      category.className = "center category";
      category.innerHTML = "<strong>" + opps[i].category + "</strong>";

      // rowTwo.className = "row";
      description = document.createElement("p");
      // description.className="center";
      description.innerHTML = opps[i].description;

      img = document.createElement("img");
      img.className = "img-fluid center";
      img.setAttribute("alt", opps[i].title);
      img.setAttribute("src", opps[i].src);
      // col1.appendChild(img);

      app = document.createElement("div");
      app.className = "center";
      link = document.createElement("a");
      link.className = "btn btn-primary";
      link.setAttribute("href", opps[i].application);
      link.setAttribute("target", "_blank");
      link.innerHTML = "Access Application";

      // link = "<a href=\"https://" + opps[i].application + "\" target=\"_blank\"><i class=\"btn btn-primary\">Access Application</i></a>";
      app.appendChild(link);

      container.appendChild(img);
      container.appendChild(titleContainer);
      container.appendChild(category);
      container.appendChild(description);
      container.appendChild(app);


      if (opps[i].faq) {
        //faq section
        f = document.createElement("h3");
        f.className = "center name";
        f.innerHTML = "FAQs";
        container.appendChild(f);

        window.onload = createFAQs(opps[i].faq, container);
        // container.appendChild(div4);
      }

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

createFAQs = (f, container) => {
  var count = 0;
  var faq = document.createElement("div");
  faq.className = "accordion intern-faq";
  faq.id = "accordionExample";

  f.forEach((q) => {
    var numwords = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

    //create card
    var card = document.createElement("div");
    card.className = "card intern-faq-question";

    //create header card
    var header = document.createElement("div");
    header.className = "card-header intern-faq-question";
    header.id = "heading" + numwords[count];

    //create question text
    var question = document.createElement("h2");
    question.className = "mb-0";

    //create header button
    var butt = document.createElement("button");
    butt.className = "btn btn-link intern-faq-question-header collapsed";
    butt.setAttribute("type", "button");
    butt.setAttribute("data-toggle", "collapse");
    butt.setAttribute("data-target", "#collapse" + numwords[count]);
    butt.setAttribute("aria-expanded", "false");
    butt.setAttribute("aria-controls", "collapse" + numwords[count]);


    // ques = "<button class=\"btn btn-link intern-faq-question-header\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\"> \"" + j.question + "\"</button>";
    butt.innerHTML = q.question;
    header.appendChild(question);
    card.appendChild(header);
    question.appendChild(butt);
    faq.appendChild(card);

    // butt.addEventListener("click", function expand(){
    //     console.log("clicked");
    //
    //     answer.className = "collapsing";
    //     answer.setAttribute("style", "height: 404px");
    //
    //     setTimeout(function() {
    //         answer.removeAttribute("style");
    //         butt.classList.toggle("collapsed");
    //
    //         answer.className = "collapse show";
    //
    //         if (butt.getAttribute("aria-expanded") == "false") {
    //             butt.setAttribute("aria-expanded", "true");
    //         } else {
    //             butt.setAttribute("aria-expanded", "false");
    //             answer.className = "collapse";
    //         }
    //     }, 0)
    // });

    // card2 = document.createElement("div");
    // card2.className = "collapse";

    //create answer block
    var answer = document.createElement("div");
    answer.id = "collapse" + numwords[count];
    answer.className = "collapse";
    answer.setAttribute("aria-labelledby", "heading" + numwords[count]);
    answer.setAttribute("data-parent", "#accordionExample");

    //create answer text
    var ans = document.createElement("p");
    ans.className = "card-body";
    ans.innerHTML = q.answer;
    answer.appendChild(ans);
    card.appendChild(answer);
    count++;
  });
  container.appendChild(faq);
}


//animation on click for the select
/* loadAnimate = () => {
animate.style.visibility = "hidden";
// animate.style.display = "none";
window.scrollTo(0, 0);
setTimeout(function() {
        animate.classList.remove("aos-animate");
        // animate.style.display = "block";
        setTimeout(function(){
                animate.style.visibility = "visible";
                animate.classList.add("aos-animate");
            }, 600);
    }, 50);
} */

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

let opportunitiesObj = [{
    title: "2021 STEMchats Internship Program",
    category: "Internship",
    description: "Thank you for your interest in our Second Annual Internship Program! We encourage you to submit an application to join us this summer! Please make sure to read all parts of the Google Form, the linked Google Docs, and FAQs at the bottom of this page carefully. Please email us at <a href = \"mailto: stemchats@stemchats.org\" target = \"_blank\">stemchats@stemchats.org</a> if you have any questions! We are excited to provide a summer of engaging and fulfilling work, networking, events, and more as we work towards our mission of shatter barriers in STEM for underrepresented students.",
    src: "/images/internship_shared_workspace.png",
    application: "https://docs.google.com/forms/d/190P98goeJ2EeC0-GmAsHnR0oW6mm0zfnhnpuX4And_I/viewform?edit_requested=true",
    faq: [{
      question: "Do I have to identify as underrepresented in STEM to apply?",
      answer: "STEMchats’s Mission is to shatter barriers in the STEM fields through impactful programming for all students, especially those who are underserved and underrepresented in STEM. Students underrepresented in the STEM fields are those coming from, but not limited to, first-generation and low-income backgrounds, as well as minorities including women, people of color, LGBTQ+, students with disabilities, students attending rural and/or underfunded high schools. Thus, please keep in mind that preference will be given to students belonging to the aforementioned groups to be a part of our team. Additionally, STEMchats will be evaluating all applications by stripping them of identifying information.<br><br>EEO Statement: At STEMchats, our mission is to help shatter barriers in the STEM fields for racially, economically, and otherwise underrepresented students. We strive to impact these diverse communities, and to create a diverse team that represents them. STEMchats is committed to being inclusive to applicants and people of all backgrounds to grow together."
    }, {
      question: "What do you look for in applicants?",
      answer: "STEMchats thrive on its team members’ individuality, but there are characteristics shared by everyone, including a passion for our mission, willingness to learn and take initiative, being a good team player, and having good communication skills. It is equally as important for all of our team members to have these characteristics. Additionally, we consider each applicant’s overall “fit” for each team; you can check out an overview of our team culture <a href=\"https://tinyurl.com/SCWorkplaceBenefits\" target=\"_blank\">here</a>. Make sure to go through our entire website to learn about all that the work that our organization does!"
    }, {
      question: "What is the time commitment for a STEMchats intern?",
      answer: "Though time commitment may vary slightly depending on the week as well as the team, all Interns are expected to contribute a minimum of six hours of their time per week to STEMchats, which includes team meetings, time working on projects, and attending workshops."
    }, {
      question: "What is the recruitment timeline? When will I know the application decision?",
      answer: "The application will be open from April 16th to May 31st (closes at 11:59 PM EST). We will release first-round decisions on May 3rd, interviews will be held from June 5th to June 9th, and final decisions will be released on June 10th. All selected interns must respond with a final decision by June 11th, 2021 at 11:59pm EST."
    }, {
      question: "What will you ask during the interview?",
      answer: "Interview details will be provided in the invitations, but interviews are a casual conversation with a Leadership Team member, the respective Lead of the team to which you applied, or a Senior Advisor who will ask about your application responses, your background and experiences, and interest in STEMchats! There will only be two interviewers present at your interview!"
    }, {
      question: "Are team members paid?",
      answer: "STEMchats team members contribute on a volunteer-basis; unfortunately, we are unable to pay our team members. We aim to be as transparent as possible around this issue because for low-income applicants, we understand that dedicating time to an organization without monetary compensation is a privilege. We hope the work you would do at STEMchats can provide a unique learning experience, and the Leadership Team will provide official verification of hours worked for any team member who requests logged volunteer hours!"
    }, {
      question: "What is STEMchats' submission policy?",
      answer: "Due to applicant volume and our recruitment timeline, we will not be accepting any late applications. For this reason, if you believe you will be unable to submit your application over Google Forms for technical reasons, please contact us at stemchats@stemchats.org BEFORE the 11:59 PM EST deadline on May 31st, 2021."
    }, {
      question: "Do I have to have a STEM background to apply?",
      answer: "We encourage anyone with an interest in STEM or business-related fields (i.e grant-writing, marketing, outreach etc.) to apply! Since we target students who might not have had extensive opportunities to pursue STEM, we are in no way expecting a deep STEM background. We hope the application allows you to express how your experience and perspective can be of value for STEMchats; we do not have a perfect applicant in mind and many of our current team members did not have a comprehensive STEM background when applying."
    }, {
      question: "Am I still eligible to apply if I'm taking a gap year during the 2021-2022 year (or are a part-time student)",
      answer: "Of course. Due to the situation surrounding COVID-19, we will accept applications from anyone who is taking a break from being a student. In fact, we encourage those who will have more free time to apply because it reflects initiative in growing personally and professionally."
    }, ]
  }
  // }, {
  //     title: "Summer Research Program",
  //     category: "Research",
  //     description: "Testing"
  // }
];


window.onload = createOpportunities(opportunitiesObj);
// window.onload =	animateOnload();


loadAnimate = () => {
  animate.style.visibility = "hidden";
  // animate.style.display = "none";
  window.scrollTo(0, 0);
  setTimeout(function() {
    animate.classList.remove("aos-animate");
    // animate.style.display = "block";
    setTimeout(function() {
      animate.style.visibility = "visible";
      animate.classList.add("aos-animate");
    }, 600);
  }, 50);
  console.log("animate in");
}

//hide other members
hide = () => {
  opps.innerHTML = "";
}

//select Category
function select(categ) {
  categories.innerHTML = categ;
  console.log(categories.textContent);
}
internship = () => {
  let array = opportunitiesObj.filter(function(opp) {
    return opp.category.indexOf("Internship") !== -1;
  })
  select("Internship");
  return array;
}
programs = () => {
  let array = opportunitiesObj.filter(function(opp) {
    return opp.category.indexOf("Programs") !== -1;
  })
  select("Programs");
  return array;
}
bizdev = () => {
  let array = opportunitiesObj.filter(function(opp) {
    return opp.category.indexOf("Business-Development") !== -1;
  })
  select("Business-Development");
  return array;
}
past = () => {
  let array = opportunitiesObj.filter(function(opp) {
    return opp.category.indexOf("Past Opportunities") !== -1;
  })
  select("Past Opportunities");
  return array;
}




// collection of card objects
