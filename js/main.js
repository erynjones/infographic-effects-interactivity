var $body = $('.banner');
var $heart;
var width = $body.outerWidth();
var height = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $heart = $('<div>');
  $heart.addClass('heart');
  $heart.css({
    top: Math.random() * height,
    left: (Math.random() * 100) + '%',
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });
  $body.append($heart);
}
