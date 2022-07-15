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

scroller(navbarScroll, 70, "bg-primary");

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

function navClassReset() {
  $(".home").removeClass("active");
  $(".our-solutions").removeClass("active");
  $(".our-clients").removeClass("active");
  $(".who-we-are").removeClass("active");
  $(".careers").removeClass("active");
  $(".contact-us").removeClass("active");
}

$(".home").click(function () {
  navClassReset();
  $(this).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#home").offset().top,
    },
    "slow"
  );
});

$(".our-solutions").click(function () {
  navClassReset();
  $(this).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#our-solutions").offset().top,
    },
    "slow"
  );
});

$(".our-clients").click(function () {
  navClassReset();
  $(this).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#our-clients").offset().top,
    },
    "slow"
  );
});

$(".who-we-are").click(function () {
  navClassReset();
  $(this).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#who-we-are").offset().top - 200,
    },
    "slow"
  );
});

$(".careers").click(function () {
  navClassReset();
  $(this).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#careers").offset().top - 100,
    },
    "slow"
  );
});

$(".contact-us").click(function () {
  navClassReset();
  $(this).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#contact-us").offset().top,
    },
    "slow"
  );
});
