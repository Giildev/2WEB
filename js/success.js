$(document).ready(function () {

var product = document.getElementsByClassName('gallery-product');

$('.showMore').on('click', function () {
  $(product).each(function(event, element){
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
      if (event >= 8) {
        element.style.display = 'none';
      }
    }
  })
})

$('.showAll').on('click', function(){
  $(product).each(function(event, element){
    if (event < 8) {
      element.style.display = 'block';
    }
  })
})
});
