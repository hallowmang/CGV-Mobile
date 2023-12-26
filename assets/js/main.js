const visualSlide = new Swiper(".visualSwiper", {
  autoplay: {
    delay: 5000,
    
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  
});

const contentSlide = new Swiper('.swiper.content-group',{
  slidesPerView:"auto",
  spaceBetween:10,
});


const iceSlide = new Swiper(".iceSwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
});


const popSlide = new Swiper('.popUp-ad',{
  autoplay: {
    delay: 5000,
    
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
})

/* 추천영화 스와이퍼 */
const recomSlide = new Swiper(".swiper.sc-recommend", {
  slidesPerView:"auto",
  spaceBetween:10,
});


$(function(){
  
  /* 팝업메뉴 */
  
  $('.ic-menu').click(function(e){
    e.preventDefault();
    $('.menu').addClass('on')
  })

  $('.close').click(function(){
    $('.menu').removeClass('on')

  })





/* 차트 타이틀 콘테이너 변경 */

  $('.title-wrap .name').click(function(){
    containerName = $(this).data('container')
    
    $(this).addClass('active').siblings().removeClass('active')
    $(containerName).addClass('active').siblings().removeClass('active');

  })


/* 차트 리스트 */
  $('.hash-item').click(function(e){
    e.preventDefault();

    tabName = $(this).data('list');

    $(this).addClass('active').siblings().removeClass('active')
    $(tabName).addClass('active').siblings().removeClass('active');
  })


/* 아코디언 */

  $('.cinema-title').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('active')) {
      $('.cinema-title').removeClass('active').siblings('.cinema-imgbox').slideUp();

    } else {
      $('.cinema-title').removeClass('active').siblings('.cinema-imgbox').slideUp();
      
      $(this).addClass('active').siblings('.cinema-imgbox').slideDown();
    }
  })



/* fix top */
  $('.fix-topBtn').hide();//탑버튼 숨김

  $(function(){
    $(window).scroll(function(){

      if ($(this).scrollTop()>5) {
        $('.fix-topBtn').fadeIn();

        // 클래스 'fix-reserve'의 스타일 변경
        $('.fix-reserve').css({
          'bottom': '93px',
          'transition': 'bottom 0.6s'
        });
      } else {
        $('.fix-topBtn').fadeOut();

        // 클래스 'fix-reserve'의 스타일 초기화
        $('.fix-reserve').css({
          'bottom': '',  // 기본값으로 초기화하려면 빈 문자열을 할당
          'transition': '' // 기본값으로 초기화하려면 빈 문자열을 할당
        });
      }
    });
  });


/* 푸터 */
  $('.name-box').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
      $('.company-info').slideUp();
    } else {
      $('.company-info').slideDown();
    }
  })
});
