$(document).ready(function () {

var product = document.getElementsByClassName('gallery-product');

$('.showMore').on('click', function () {
  $(product).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMore').text('Mostrar Menos');
    } else {
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMore').text('Mostrar Mas');
    }
  })
})

$('.showAll').on('click', function(){
  $('.showMore').show();
  $(product).css('display', 'none');
  var first8 = $(product).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

$('.showWeb, .showMedida, .showApp, .showTarjeta, .showAgencia').on('click', function () {
  $('.showMore').hide();
})
});
