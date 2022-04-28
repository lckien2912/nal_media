function load(img) {
  const url = img.getAttribute("lazy-src");
  img.setAttribute("src", url);
}

function ready() {
  if ("IntersectionObserver" in window) {
    var lazyImgs = document.querySelectorAll("img[lazy-src]");
    let observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && load(entry.target);
      });
    });
    lazyImgs.forEach((img) => {
      observe.observe(img);
      //   observe.unobserve(img);
    });
  }
}

document.addEventListener("DOMContentLoaded", ready);
