'use strict';
var view = {};

view.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    var whichTab = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + whichTab).fadeIn();
  });
};

view.handleLoad = function () {
  $('.tab-content').hide();
  $('#home').fadeIn();
};

view.handleMainNav();
view.handleLoad();
