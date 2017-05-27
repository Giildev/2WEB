$(document).ready(function () {

$('.showMore, .showMoreMedida, .showMoreApp, .showMoreTarjeta, .showMoreAgencia').hide();
var product = document.getElementsByClassName('gallery-product');
var productWeb = document.getElementsByClassName('web');
var productMedida = document.getElementsByClassName('medida');
var productApp = document.getElementsByClassName('app');
var productTarjeta = document.getElementsByClassName('tarjeta');
var productAgencia = document.getElementsByClassName('agencia');

// Filters

$('.showAll').on('click', function(){
  $('.showMoreWeb, .showMoreMedida, .showMoreApp, .showMoreTarjeta, .showMoreAgencia').hide();
  $('.showMore').show();
  $(product).css('display', 'none');
  var first8 = $(product).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

$('.showWeb').on('click', function(){
  $('.showMore, .showMoreMedida, .showMoreApp, .showMoreTarjeta, .showMoreAgencia').hide();
  $('.showMoreWeb').show();
  $(productWeb).css('display', 'none');
  $('.medida, .tarjeta, .app, .agencia').hide();
  var first8 = $(productWeb).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

$('.showMedida').on('click', function(){
  $('.showMore, .showMoreWeb, .showMoreApp, .showMoreTarjeta, .showMoreAgencia').hide();
  $('.showMoreMedida').show();
  $(productMedida).css('display', 'none');
  $('.web, .tarjeta, .app, .web').hide();
  var first8 = $(productMedida).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

$('.showApp').on('click', function(){
  $('.showMore, .showMoreMedida, .showMoreWeb, .showMoreTarjeta, .showMoreAgencia').hide();
  $('.showMoreApp').show();
  $(productApp).css('display', 'none');
  $('.medida, .tarjeta, .web, .web').hide();
  var first8 = $(productApp).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

$('.showTarjeta').on('click', function(){
  $('.showMore, .showMoreMedida, .showMoreApp, .showMoreWeb, .showMoreAgencia').hide();
  $('.showMoreTarjeta').show();
  $(productTarjeta).css('display', 'none');
  $('.medida, .web, .app, .agencia').hide();
  var first8 = $(productTarjeta).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

$('.showAgencia').on('click', function(){
  $('.showMore, .showMoreMedida, .showMoreApp, .showMoreTarjeta, .showMoreWeb').hide();
  $('.showMoreAgencia').show();
  $(productAgencia).css('display', 'none');
  $('.medida, .tarjeta, .app, .web').hide();
  var first8 = $(productAgencia).slice(0,8);
  $(first8).each(function(event, element){
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  })
})

// End - Filters

// Products


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

$('.showMoreWeb').on('click', function () {
  $(productWeb).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMoreWeb').text('Mostrar Menos');
    } else {
      $('.medida, .tarjeta, .app, .agencia').hide();
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMoreWeb').text('Mostrar Mas');
    }
  })
})

$('.showMoreMedida').on('click', function () {
  $(productMedida).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMoreMedida').text('Mostrar Menos');
    } else {
      $('.web, .tarjeta, .app, .agencia').hide();
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMoreMedida').text('Mostrar Mas');
    }
  })
})

$('.showMoreApp').on('click', function () {
  $(productApp).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMoreApp').text('Mostrar Menos');
    } else {
      $('.medida, .web, .app, .agencia').hide();
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMoreApp').text('Mostrar Mas');
    }
  })
})

$('.showMoreTarjeta').on('click', function () {
  $(productTarjeta).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMoreTarjeta').text('Mostrar Menos');
    } else {
      $('.medida, .tarjeta, .web, .agencia').hide();
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMoreTarjeta').text('Mostrar Mas');
    }
  })
})

$('.showMoreAgencia').on('click', function () {
  $(productAgencia).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
        $('.showMoreAgencia').text('Mostrar Menos');
    } else {
      $('.medida, .tarjeta, .app, .web').hide();
      if (event >= 8) {
        element.style.display = 'none';
      }
      $('.showMoreAgencia').text('Mostrar Mas');
    }
  })
})

// End - Products

});
