$(document).ready(function(){ //시작


  AOS.init();


  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });

  $(".ham").click(function () {
    $(".mgnb_wrap").animate({
        left: '0'
    });
  });

  $(".mgnb_close").click(function () {
      $(".mgnb_wrap").animate({
          left: '100%'
      });
  });

  //모바일 2차메뉴
  $(".mgnb > li").click(function () {
    if($(this).children(".mdepth2").css("display") == "none"){
      $(this).children(".mdepth2").slideDown();
      $(this).siblings().children(".mdepth2").slideUp();
    }else{
      $(this).children(".mdepth2").slideUp();
    }

  });


  // 배너슬라이드
  const banner_list = new Swiper(".banner_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    loop: true,
  });

  // 메뉴슬라이드
  const menu_list = new Swiper(".menu_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        768: {
            // 가로해상도가 768px 이상일 경우
            slidesPerView: 2.5,
        },
        1200: {
            // 가로해상도가 1024px 이상일 경우
            slidesPerView: 4,
        },
    },
  });

}); //끝