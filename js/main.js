const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("smaller");
  } else {
    header.classList.remove("smaller");
  }
});

const scrollLinks = document.querySelectorAll('.navigation');

scrollLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    const offsetTop = target.offsetTop;
    document.documentElement.classList.toggle("menu-open");

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});