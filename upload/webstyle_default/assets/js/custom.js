$(function(){
  /*第一層*/
  $('.dropdown').each(function(){
    $(this).find('a').first().focus(function(){
      $(this).siblings('ul').css({
        'opacity':'1',
        'top':'auto',
        'display':'block'
      });
    });
    $(this).children('a').focus(function(){
      $(this).parent().siblings('.dropdown').children('.dropdown-menu').removeAttr('style')
    })
    $(this).find('a').last().blur(function(){
      $(this).parents('.dropdown-menu').removeAttr('style')
    })
  });
  /*第二層之後*/
  $('.dropdown-submenu').each(function(){
    $(this).find('a').first().focus(function(){
      $(this).siblings('ul').css({
        'opacity':'1',
        'top':'0',
        'display':'block'
      });
    });
    $(this).find('a').last().blur(function(){
      $(this).parent().parent().removeAttr('style')
    })
  });


  var urlParams;
  (window.onpopstate = function () {
    var match,
  pl     = /\+/g,  // Regex for replacing addition symbol with a space
  search = /([^&=]+)=?([^&]*)/g,
  decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
  query  = window.location.search.substring(1);

  urlParams = Array();
  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
  })();

  $('.left-nav li').find('a').each(function(){
    str = $(this).attr('href').split('ids=');
    if(urlParams["ids"]==str['1']){
      $(this).parents('li').addClass('active')
    }
  })
  $('.collapse li').find('a').each(function(){
    str = $(this).attr('href').split('ids=');
    if(urlParams["ids"]==str['1'] && urlParams["ids"] != undefined){
      $(this).parents('li.dropdown').addClass('active')
    }
  })

})

$(function(){
  $('.nav-button > a').on('click',function(e){
    sub_menu = $(this).siblings('.sub-menu');
    if(sub_menu.length>0){
      sub_menu.slideToggle();
      e.preventDefault();
    }
  })
})