// JavaScript Document

// JavaScript Document
/* sp-menu toggle */
$(document).ready(function() {
         $('.menu').on('click', function(){
    $(this).toggleClass('is-active');
    $('.spmenu').slideToggle();
  });

  $(".sp_btn").click(function(){
    
    $(this).find(".sp_subul").slideToggle();
        return false;
  });
   $(".sp_subul li").click(function(){
      
 var link=$(this).find("a").attr('href');
 window.location.href = link;
     
  });  

     $(function() {
    var showTop = 100;

    $('body').append('<a href="javascript:void(0);" id="fixedTop">▲</a>');
    var fixedTop = $('#fixedTop');
    fixedTop.on('click', function() {
      $('html,body').animate({
        scrollTop: '0'
      }, 500);
    });
    $(window).on('load scroll resize', function() {
      if ($(window).scrollTop() >= showTop) {
        fixedTop.fadeIn('normal');
      } else if ($(window).scrollTop() < showTop) {
        fixedTop.fadeOut('normal');
      }
    });
  });
});





    