var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

// タブ
$('#smarttab').smartTab({
  enableUrlHash: false
});
