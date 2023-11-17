$(document).ready(function(){
    $('.eb_slider_list').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
        fade:true
    });
  });

// 정지 재생 버튼
// 자바스크립트
// btn_stop.addEventListener('click'function(){})
// btn_stop.onclick(function(){})

// jquary
$('.event_box_2 .page_act .btn_stop').click(function(e){
    e.preventDefault();
    if($('.event_box_2 .page_act').hasClass('on')){
        // on이라는 클래스명을 가지고있다면 true
        // 없으면 false
        $('.event_box_2 .page_act').removeClass('on');
        $('.eb_slider_list').slick('slickPause');
    }
})

$('.event_box_2 .page_act .btn_play').click(function(e){
    e.preventDefault();
    if(!$('.event_box_2 .page_act').hasClass('on')){
      $('.event_box_2 .page_act').addClass('on')
      $('.eb_slider_list').slick('slickPlay');
    } 
})

$('.card').slick({
    arrows:false,
    autoplay:true,
    dots:true,
    pauseOnHover:false,
  });

  $('.event_box_3 .page_act .btn_stop').click(function(e){
    e.preventDefault();
    if($('.event_box_3 .page_act').hasClass('on')){
        // on이라는 클래스명을 가지고있다면 true
        // 없으면 false
        $('.event_box_3 .page_act').removeClass('on');
        $('.card').slick('slickPause');
    }
})

$('.event_box_3 .page_act .btn_play').click(function(e){
    e.preventDefault();
    if(!$('.event_box_3 .page_act').hasClass('on')){
      $('.event_box_3 .page_act').addClass('on')
      $('.card').slick('slickPlay');
    } 
})

// life button

let tab = $('.life_menu ul li')
let menu = $('.life_style ul li')

tab.mouseover(function(){
  let target = $(this)
  let index = target.index()
  menu.css({opacity:0})
  menu.eq(index).css({opacity:1})
})
