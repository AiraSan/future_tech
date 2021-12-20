$(window).ready(function () {
  $(document).scroll(function () {
    let currentHeight = $(window).scrollTop();
    if (currentHeight >= 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#home"]').addClass("active-nav");
    }
  });

  $(".nav-link").click(function () {
    $(".navbar-collapse").toggle();
    $(".menu-icon").removeClass("fa-times");
    $(".menu-icon").addClass("fa-bars");
  });

  $(".navbar-toggler").click(function () {
    $(".menu-icon").toggleClass("fa-times").toggleClass("fa-bars");
    $(".navbar-collapse").slideToggle();
    //   $(".mobile-nav").slideToggle();
  });

  /* -------- Active NavLink ----------- */
  $("#home").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#home"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#feature").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#feature"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#blog").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#blog"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#service").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#service"]').addClass("active-nav");
    },
    { offset: "20%" }
  );
  $("#contact").waypoint(
    function () {
      $(".nav-link").removeClass("active-nav");
      $('.nav-link[href="#contact"]').addClass("active-nav");
    },
    { offset: "30%" }
  );

  //   Wow Js
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});

$(window).on("load", function () {
  $(".loader-container").fadeOut(500, function () {
    $(this).remove();
  });
});
