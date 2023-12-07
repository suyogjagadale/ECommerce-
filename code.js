function myfunction() {
  alert("login successfully");
}

function button(){
  alert("deleted Successfully")
}
const multipleItemCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(max-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: 3000, // Adjust this value to set the interval between slides
  });

  var carouselWidth = $(".carousel-inner").innerWidth();
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

} else {
  // If the window width is greater than 576 pixels
  $(multipleItemCarousel).addClass("slide");
}
