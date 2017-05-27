$(document).ready(function () {

var product = document.getElementsByClassName('gallery-product');
var productWeb = document.getElementsByClassName('web');

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


$('.showMoreWeb').on('click', function () {
  $(productWeb).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMoreWeb').text('Mostrar Menos');
    } else {
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMoreWeb').text('Mostrar Mas');
    }
  })
})

$('.showAllWeb').on('click', function(){
  $('.showMoreWeb').show();
  $(productWeb).css('display', 'none');
  var first8 = $(productWeb).slice(0,8);
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
