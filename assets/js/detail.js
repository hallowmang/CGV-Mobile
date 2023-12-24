const detailSlide = new Swiper('.swiper.detail-slide',{});


const detailEventSlide = new Swiper('.swiper.detail-event-wrap',{});

$(function(){
  $(".synopsis-more").click(function(e) {
    e.preventDefault();
    $(".synopsis").toggleClass("open");

    if ($(".synopsis").hasClass("open")) {
      $(".synopsis-accordion").slideUp();
      $(".synopsis-more").text("접기");
    } else {
      $(".synopsis-accordion").slideDown();
      $(".synopsis-more").text("더보기");  
    }
  });
})

