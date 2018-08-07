function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  $('.about').on('click', function() {
  $(this).toggleClass('active');
   window.location.href="./about.html"
 
   	  
	});
  $('.projects-button').on('click', function() {
    $(this).toggleClass('active');
    $(this).text("Project's Viewed")
    $(this).next().slideToggle(400)
	});
}

$(document).ready(main);
