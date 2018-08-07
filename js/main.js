function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(2000);
  
  $('.projects').hide();
  $('.about').on('click', function() {
  $(this).toggleClass('active');
   window.location.href="./about.html"
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
