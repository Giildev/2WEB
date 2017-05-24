$(document).ready(function () {
    // Load the first 3 list items from another HTML file
    //$('#myList').load('externalList.html li:lt(3)');
    $('.gallery-product').css('display','none');
    $('#catalogoList div:lt(16)').show();
    var items =  $('#catalogoList div').length/2;
    var shown =  16;
    $('#showmore').click(function () {
        shown = $('#catalogoList div:visible').length/2+4;
        if(shown< items) {
          console.log($('#catalogoList div:lt('+shown*2+')'));
          $('#catalogoList div:lt('+shown*2+')').show();
        } else {
          $('#catalogoList div:lt('+items*2+')').show();
          $('#loadMore').hide();
         }
    });
});
