const navEl = document.querySelector(".navbar");
const toTopEl = document.querySelector("#to-top");

function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 70) {
    navEl.classList.add("sticky");
    toTopEl.classList.add("show");
  } else {
    navEl.classList.remove("sticky");
    toTopEl.classList.remove("show");
  }
});

let called = false;
document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop >= 100) {
    if (called) return;
    called = true;
    incrementStats();
  }
});

toTopEl.addEventListener("click", scrollTop);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
  reset: true, //Animations repeat
});

sr.reveal(`.sr-left`, { origin: "left" });
sr.reveal(`.sr-right`, { origin: "right" });
sr.reveal(`.sr`, { origin: "bottom" });
