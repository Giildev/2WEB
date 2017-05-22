// Smooth Scroll Animation
// **************************************
$(document).ready(function(){
  $("a.smoothS").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }

  });
});


// Material Button
// **************************************
$(document).ready(function () {
  $('.material-button-toggle').on("click", function () {
    $(this).toggleClass('open');
    $('.option').toggleClass('scale-on');
  });
});


// Galery Filter
// **************************************
$(document).ready(function(){

  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    if(value == "todos")
    {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else
    {
// $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');
    }

  });

});


// DropDown Effects
// **************************************
var dropdownSelectors = $('.dropdown, .dropup');

// Custom function to read dropdown data
// =========================
function dropdownEffectData(target) {
  // @todo - page level global?
  var effectInDefault = null,
      effectOutDefault = null;
  var dropdown = $(target),
      dropdownMenu = $('.dropdown-menu', target);
  var parentUl = dropdown.parents('ul.nav');

  // If parent is ul.nav allow global effect settings
  if (parentUl.length > 0) {
    effectInDefault = parentUl.data('dropdown-in') || null;
    effectOutDefault = parentUl.data('dropdown-out') || null;
  }
  
  return {
    target:       target,
    dropdown:     dropdown,
    dropdownMenu: dropdownMenu,
    effectIn:     dropdownMenu.data('dropdown-in') || effectInDefault,
    effectOut:    dropdownMenu.data('dropdown-out') || effectOutDefault,
  };
}

// Custom function to start effect (in or out)
// =========================
function dropdownEffectStart(data, effectToStart) {
  if (effectToStart) {
    data.dropdown.addClass('dropdown-animating');
    data.dropdownMenu.addClass('animated');
    data.dropdownMenu.addClass(effectToStart);
  }
}

// Custom function to read when animation is over
// =========================
function dropdownEffectEnd(data, callbackFunc) {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  data.dropdown.one(animationEnd, function() {
    data.dropdown.removeClass('dropdown-animating');
    data.dropdownMenu.removeClass('animated');
    data.dropdownMenu.removeClass(data.effectIn);
    data.dropdownMenu.removeClass(data.effectOut);
    
    // Custom callback option, used to remove open class in out effect
    if(typeof callbackFunc == 'function'){
      callbackFunc();
    }
  });
}

// Bootstrap API hooks
// =========================
dropdownSelectors.on({
  "show.bs.dropdown": function () {
    // On show, start in effect
    var dropdown = dropdownEffectData(this);
    dropdownEffectStart(dropdown, dropdown.effectIn);
  },
  "shown.bs.dropdown": function () {
    // On shown, remove in effect once complete
    var dropdown = dropdownEffectData(this);
    if (dropdown.effectIn && dropdown.effectOut) {
      dropdownEffectEnd(dropdown, function() {});
    }
  },
  "hide.bs.dropdown":  function(e) {
    // On hide, start out effect
    var dropdown = dropdownEffectData(this);
    if (dropdown.effectOut) {
      e.preventDefault();
      dropdownEffectStart(dropdown, dropdown.effectOut);
      dropdownEffectEnd(dropdown, function() {
        dropdown.dropdown.removeClass('open');
      });
    }
  },
});