// Smooth scrolling
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 70)
      }, 600);
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

// Set next scene in portal
function nextScene(scena) {
  portal = $(".portal");
  portal.unbind('mouseenter');
  setTimeout(function(){
    portal.bind('mouseenter', function() {nextScene($("#scena"))});
  }, 1000);
  var number =(parseInt(scena.attr("src").charAt(9)))%4+1;
  scena.attr("src", `img/scene${number}.jpg`);
};

$(".portal").mouseenter(function() {nextScene($("#scena"))});

// Change icon
$("#mortyIcon").hover(function() {
  if (typeof number === 'undefined') number=0;
  number=(number+1)%2;
  if ($(this).attr("src")=="img/evilmorty.jpg" && number==1) {
    $(this).attr("src", "img/morty.png")
    $("#mortyOpis").html("Towarzysz przygód");
  }
  else if (number==1) {
    $(this).attr("src", "img/evilmorty.jpg")
    $("#mortyOpis").html("Prezydent Cytadeli");
  }
});

$("#rickIcon").hover(function() {
  if (typeof number === 'undefined') number=0;
  number=(number+1)%2;
  if ($(this).attr("src")=="img/picklerickicon.png" && number==1) {
    $(this).attr("src", "img/rick.png")
    $("#rickOpis").html("Myśliciel w C-137");
  }
  else if (number==1) {
    $(this).attr("src", "img/picklerickicon.png")
    $("#rickOpis").html("PICKLE RICK!!!");
  }
});

// Wrum wrum
function wrum() {
  setTimeout(function(){
    $("form")[0].reset();
    $(".alert").css("display", "block")
  }, 2000);
  setTimeout(function(){
    $(".alert").css("display", "none")
  }, 6000);
  document.getElementById("ship").animate([
    // keyframes
    { transform: 'translate(0, 0)' },
    { transform: 'translate(-120px, -110px)' },
    { transform: 'translate(-300px, -100px)' },
    { transform: 'translate(-450px, -80px)' },
    { transform: 'translate(-600px, -160px)' },
    { transform: 'translate(-800px, -150px)' },
    { transform: 'translate(-850px, -200px)' },
    { transform: 'translate(-950px, -250px)' },
    { transform: 'translate(-1200px, -320px)' }
  ], { 
    // timing options
    duration: 2000
  });
  document.getElementById("ship").animate([
    { opacity: '0' }, 
    { opacity: '1' }
  ], {
    duration: 3000,
    delay: 2000
  });
}

$(".close").click(function() {
  $(".alert").css("display", "none");
})