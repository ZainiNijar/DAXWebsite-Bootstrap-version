const navbarScroll = document.getElementById("navbar-scroll");

const scroller = (element, scrollTop, classAdd) => {
  document.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > scrollTop ||
      document.documentElement.scrollTop > scrollTop
    ) {
      element.classList.add(classAdd);
    } else {
      element.classList.remove(classAdd);
    }
  });
};

scroller(navbarScroll, 70, "bg-dark");

// btn
const btnProducts = document.getElementById("btn-products");
const btnServices = document.getElementById("btn-services");
// el
const products = document.getElementById("products");
const services = document.getElementById("services");

btnProducts.addEventListener("click", () => {
  // btn
  btnProducts.classList.toggle("active");
  btnServices.classList.toggle("active");
  // el
  products.classList.toggle("active");
  services.classList.toggle("active");
});

btnServices.addEventListener("click", () => {
  // btn
  btnProducts.classList.toggle("active");
  btnServices.classList.toggle("active");
  // el
  products.classList.toggle("active");
  services.classList.toggle("active");
});
