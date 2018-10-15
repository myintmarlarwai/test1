// JavaScript Document
$(function(){
  $("#toggle").click(function(){
    $(".sp_gnav").slideToggle();
    return false;
  });
  $(".sp_menu").click(function(){
     $(this).find(".subul").slideToggle();
    return false;
  });

   $(".subul li").click(function(){
    
    
 var link=$(this).find("a").attr('href');
 window.location.href = link;
     
  });

$(function(){
  var showTop = 100;

  $('body').append('<a href="javascript:void(0);" id="fixedTop">▲</a>');
  var fixedTop = $('#fixedTop');
  fixedTop.on('click',function(){
    $('html,body').animate({scrollTop:'0'},500);
  });
  $(window).on('load scroll resize',function(){
    if($(window).scrollTop() >= showTop){
      fixedTop.fadeIn('normal');
    } else if($(window).scrollTop() < showTop){
      fixedTop.fadeOut('normal');
    }
  });
});
        
});


  // JavaScript Document

    