function main() {
  $('.page-load-text').text(' ')
  $('.skillset').hide();
  $('.skillset').fadeIn(2000);
  $('#note').hide()
  $('.projects').hide();
  $('.about').on('click', function() {
  $(this).toggleClass('active');
   window.location.href="./about.html"
  });
  $('.trailer').on('click', function() {
 
   window.location.href="https://www.youtube.com/watch?v=BvcICF7BqzU&feature=youtu.be"
  });
  $('.back-to-home').on('click', function() {
  $(this).toggleClass('active');
window.location.href="./index.html"
   	  
	});
  $('.projects-button').on('click', function() {
    $(this).toggleClass('active');
    $(this).text("Games Viewed")
    $(this).next().slideToggle(400)
	});
}

$(document).ready(main);
