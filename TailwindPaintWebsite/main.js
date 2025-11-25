const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburgerBtn = document.getElementById("hamburger");
const hamburgerIcon = hamburgerBtn.querySelector("i");

// Check if screen is mobile
function isMobile() {
  return window.innerWidth < 640; // sm breakpoint in Tailwind
}

// Open menu (mobile only)
function openMenu() {
  if (!isMobile()) return;

  navMenu.classList.remove("left-[-100%]");
  navMenu.classList.add("left-0");

  hamburgerIcon.classList.replace("ri-menu-4-line", "ri-close-line");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden"; // prevent scroll
}

// Close menu (mobile only)
function closeMenu() {
  if (!isMobile()) return;

  navMenu.classList.add("left-[-100%]");
  navMenu.classList.remove("left-0");

  hamburgerIcon.classList.replace("ri-close-line", "ri-menu-4-line");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

// Toggle menu
hamburgerBtn.addEventListener("click", () => {
  if (!isMobile()) return; // do nothing on desktop
  const isOpen = navMenu.classList.contains("left-0");
  if (isOpen) closeMenu();
  else openMenu();
});

// Close when a nav link is clicked (mobile only)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!isMobile()) return;
    if (navMenu.classList.contains("left-0")) closeMenu();
  });
});

// Optional: update on window resize (to reset icon if user resizes)
window.addEventListener("resize", () => {
  if (!isMobile()) {
    // ensure menu is visible and hamburger icon is correct on desktop
    navMenu.classList.remove("left-[-100%]");
    navMenu.classList.add("left-0");
    hamburgerIcon.classList.replace("ri-close-line", "ri-menu-4-line");
    document.body.style.overflow = "";
  } else {
    // hide mobile menu by default on small screens
    navMenu.classList.add("left-[-100%]");
    navMenu.classList.remove("left-0");
    hamburgerIcon.classList.replace("ri-close-line", "ri-menu-4-line");
  }
});
