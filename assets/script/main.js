// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

$('a[href^="#"]').click(function () {
  hamburger.removeClass('hamburger-menu-active');
});


// スムーススクロール
$(function () {
  $('a[href^="#"]:not(a.noscroll)').click(function () {
    var adjust = -100;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

  // タブ
  $('#smarttab').smartTab({
    enableUrlHash: false
  });
