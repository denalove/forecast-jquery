var main = function() {
  

  $('.day').click(function() {
  	$(this).next().toggle();

  });

  $('.day').click(function() {
  	$('.weekday').find('span').toggleClass('glyphicon-plus  glyphicon-minus');
  });

};

$(document).ready(main);