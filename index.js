var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(".m-item").mouseover(
  function() {
    $("#p-act").removeClass( "active" );
  }
);
$(".m-item").mouseout(
  function(){
    $("#p-act").addClass("active");
  }
);
