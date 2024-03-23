////  Image Load function  ////

$(function(){
    $('img.lazy').lazyload({
      effect: "fadeIn"
    });
  });


///// Date picker function  /////

 $( function() {
    $( "#datepicker" ).datepicker({
        dateFormat:'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
    yearRange: "1980:2020"
    }).datepicker('setDate', '0');
  });

