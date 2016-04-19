var $couple = $('.couple');
var $friends = $('.friends');
var $doggy = $('.doggy');
var $ar = $('.ar');
var $arr = $('.arr');
var $arro = $('.arro');
var $arrow = $('.arrow');

$couple.waypoint (function (direction) {
  if (direction == 'down') {
    $couple.addClass('js-couple-animate');
  } else {
    $couple.removeClass('js-couple-animate');
  }
}, { offset: '63%' });

$friends.waypoint (function (direction) {
  if (direction == 'down') {
    $friends.addClass('js-friends-animate');
  } else {
    $friends.removeClass('js-friends-animate');
  }
}, { offset: '50%' });

$doggy.waypoint (function (direction) {
  if (direction == 'down') {
    $doggy.addClass('js-doggy-animate');
  } else {
    $doggy.removeClass('js-doggy-animate');
  }
}, { offset: '50%' });

$ar.waypoint (function (direction) {
  if (direction == 'down') {
    $ar.addClass('js-arrow-animate');
  } else {
    $ar.removeClass('js-arrow-animate');
  }
}, { offset: '100%' });

$arr.waypoint (function (direction) {
  if (direction == 'down') {
    $arr.addClass('js-arrow-1-animate');
  } else {
    $arr.removeClass('js-arrow-1-animate');
  }
}, { offset: '100%' });

$arro.waypoint (function (direction) {
  if (direction == 'down') {
    $arro.addClass('js-arrow-2-animate');
  } else {
    $arro.removeClass('js-arrow-2-animate');
  }
}, { offset: '100%' });

$arrow.waypoint (function (direction) {
  if (direction == 'down') {
    $arrow.addClass('js-arrow-3-animate');
  } else {
    $arrow.removeClass('js-arrow-3-animate');
  }
}, { offset: '100%' });
