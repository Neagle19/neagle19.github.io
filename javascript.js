let navbar = document.querySelector(".header-navigation");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight - 70) {
      navbar.classList.add('navbar-show');
    } else {
      navbar.classList.remove('navbar-show')
    }
  });
}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  let learn = document.querySelector(".learn-more-button");
  let wrapper = document.querySelector(".wrapper");

  learn.addEventListener('click', () => {
    if (wrapper.style.animation) {
      wrapper.style.animation = ''
    } else {
      wrapper.style.animation = 'cursorChange 4s ease';
    }
  });

  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
    }
  });
  // Cursor Animation
  // Burger Animation
  burger.classList.toggle('toggle');
  });
}

navSlide();

// let absoluteBg = document.querySelector(".absolute-bg");
// let webDesign = document.querySelector(".styling");
//   webDesign.addEventListener("mouseover", function ( event ) {
//     absoluteBg.style.backgroundImage = "url(img/BG_photo.jpeg)";
//     absoluteBg.style.transition = "0.3s";
// });
//   webDesign.addEventListener("mouseout", function ( event ) {
//     absoluteBg.style.backgroundImage = "url(img/BG_photo_B&W.jpg)";
//     absoluteBg.style.transition = "2s ease-in-out";
// });

let absoluteBg = document.querySelector(".absolute-bg");
let learnMore = document.querySelector(".learn-more-button");
  learnMore.addEventListener("mouseover", function ( event ) {
    learnMore.style.transition = "0.1s";
    learnMore.style.background = "white";
    learnMore.style.color = "black";
    learnMore.style.border = "3px solid black";
    absoluteBg.style.backgroundImage = "url(img/BG_photo.jpeg)";
    absoluteBg.style.transition = "0.3s";
  });
  learnMore.addEventListener("mouseout", function ( event ) {
    learnMore.style.transition = "2.5s";
    learnMore.style.background = "transparent";
    learnMore.style.color = "white";
    learnMore.style.border = "3px solid white";
    absoluteBg.style.backgroundImage = "url(img/BG_photo_B&W.jpg)";
    absoluteBg.style.transition = "2s ease-in-out";
});

let contactButton = document.querySelector("#contact");
  contactButton.addEventListener("mouseover", function ( event ) {
    contactButton.style.color = "white";
    contactButton.style.background = "black";
    contactButton.style.transition = ".01s";
  });
  contactButton.addEventListener("mouseout", function ( event ) {
    contactButton.style.transition = "1.3s";
    contactButton.style.color = "black";
    contactButton.style.background = "white";
    contactButton.style.border = "2px solid -webkit-linear-gradient(left, #3ebac6 0%, #8b539e 100%)";
  });

// The rainbow colors: -webkit-linear-gradient(left, #3ebac6 0%, #8b539e 100%)




// let new_scroll_position = 0;
// let last_scroll_position;
// let header = document.getElementById("header");

// window.addEventListener('scroll', function(e) {
//   last_scroll_position = window.scrollY;

//   // Scrolling down
//   if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
//     // header.removeClass('slideDown').addClass('slideUp');
//     header.classList.remove("slideDown");
//     header.classList.add("slideUp");

//   // Scrolling up
//   } else if (new_scroll_position > last_scroll_position) {
//     // header.removeClass('slideUp').addClass('slideDown');
//     header.classList.remove("slideUp");
//     header.classList.add("slideDown");
//   }

//   new_scroll_position = last_scroll_position;
// });



// let navbar = document.querySelector(".nav");
// if (navbar) {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY >= window.innerHeight - 70) {
//       navbar.classList.add('navbar-show');
//     } else {
//       navbar.classList.remove('navbar-show')
//     }
//   });
// };




