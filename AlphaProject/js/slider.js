jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 1500);
  });
  
    $("#fade").hover(function(){
        $(this).fadeOut(1000);
        $(this).fadeIn(1000);
    });
	
	$("#fadeQuick, #flik1, #flik2, #flik3").hover(function(){
        $(this).fadeOut(200);
        $(this).fadeIn(200);
    });

	$("#oddLi").hover(function() {
		$("li:odd").css("color", "red");
	});
	
	$("#evenLi").hover(function() {
		$("li:even").css("color", "green");
	});
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');
	
	// --------------------
	
	 $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
  // -------------------------------------------------------------
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

   

});    