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

// リンクに対するマウスオーバー時のアニメーション
var onMouseenter = function (e) {
  $(e.target).css({
    'opacity': '0.6',
  });
};
var onMouseleave = function (e) {
  $(e.target).css({
    'opacity': '1',
  });
};
$('a:not(a.no-hover)')
  .on('mouseenter', onMouseenter)
  .on('mouseleave', onMouseleave);

  if($(window).innerWidth() <= 767){
  $('.transform').on('mouseenter', function (e) {
    $(this).css({ 'transform': 'unset' });
  });
}else{
  $('.transform').on('mouseenter', function (e) {
    $(this).css({ 'transform': 'scale(1.2,1.2)' });
  });
  $('.transform').on('mouseleave', function (e) {
    $(this).css({ 'transform': 'unset' });
  })};




  // タブ
  $('#smarttab').smartTab({
    enableUrlHash: false
  });
