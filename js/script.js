/* ------------- toggle icon navbar --------------------- */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle('active');
};

/* ------------- scroll section active link --------------------- */
let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    id(top >= offset && top < offset + height);
    {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ------------- sticky navbar --------------------- */
  let header = document.querySelectorAll("header");

  header.classList.toggle("sticky", window.screenY > 100);
};
