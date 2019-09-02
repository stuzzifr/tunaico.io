$(document).ready(function(){
  setTimeout(function(){
    $('#preloader').fadeOut(500);
  }, 3000);
});

var top;
var showed = [false, false, false, false, false, false, false, false, false];
$(window).scroll( function() {

    if ($(this).scrollTop() > $("#shower-1").offset().top-350 && !showed[1]){
      //$('#shower-1').removeClass('shower-down', 700);
      showed[1] = true;
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-1').css({backgroundColor: '#999'});
    }else if($(this).scrollTop() > $("#shower-1").offset().top-350){
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-1').css({backgroundColor: '#999'});
    }

    if ($(this).scrollTop() > $("#shower-2").offset().top-780 && !showed[2]){
      $('#shower-2').removeClass('shower-down2', 700);
      showed[2] = true;
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-2').css({backgroundColor: '#999'});
      $('#shower-2 i').delay(600).animate({opacity: 1}, 550);
    }else if($(this).scrollTop() > $("#shower-2").offset().top-350){
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-2').css({backgroundColor: '#999'});
    }

    if ($(this).scrollTop() > $("#shower-3").offset().top-880 && !showed[3]){
      $('#shower-3').removeClass('shower-down', 700);
      showed[3] = true;
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-3').css({backgroundColor: '#999'});
    }else if($(this).scrollTop() > $("#shower-3").offset().top-350){
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-3').css({backgroundColor: '#999'});
    }


    if ($(this).scrollTop() > $("#shower-4").offset().top-862 && !showed[4]){
      $('#shower-4').removeClass('shower-down', 700);
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-4').css({backgroundColor: '#999'});
      showed[4] = true;
      setTimeout(
        function()
        {
          var top = $("#shower-4").offset().top;
          $('#telegram').animate({top: top+"px", opacity: '1'},1000);
        }, 800);

    }else if($(this).scrollTop() > $("#shower-4").offset().top-500){
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-4').css({backgroundColor: '#999'});
    }


    if ($(this).scrollTop() > $("#shower-5").offset().top-860 && !showed[5]){
      $('#shower-5').removeClass('shower-down', 700);
      showed[5] = true;
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-5').css({backgroundColor: '#999'});

      $('.chart-right').delay(900).animate({opacity: 1.0}, 2000);

      pie.redraw();

      }else if($(this).scrollTop() > $("#shower-5").offset().top-500){
        $('.v-dot').css({backgroundColor: '#58595b'});
        $('#vd-5').css({backgroundColor: '#999'});
      }


    if ($(this).scrollTop() > $("#shower-8").offset().top-790 && !showed[8]){
      $('#shower-8').removeClass('shower-down', 700);
      showed[8] = true;
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-6').css({backgroundColor: '#999'});

        $('#particles').delay(800).animate({opacity: .5}, 1050);

      }else if($(this).scrollTop() > $("#shower-8").offset().top-550){
        $('.v-dot').css({backgroundColor: '#58595b'});
        $('#vd-6').css({backgroundColor: '#999'});
      }


    if ($(this).scrollTop() > $("#shower-6").offset().top - 815 && !showed[6]){
      $('#shower-6').removeClass('shower-down', 700);
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-7').css({backgroundColor: '#999'});
      showed[6] = true;

      setTimeout(
        function()
        {
          var top = $("#shower-6").offset().top;
          $('#const').animate({top: top+"px", opacity: '1'},1500);
        }, 800);
    }else if($(this).scrollTop() > $("#shower-6").offset().top- 500){
      $('.v-dot').css({backgroundColor: '#58595b'});
      $('#vd-7').css({backgroundColor: '#999'});
    }


    if ($(this).scrollTop() > $("#shower-7").offset().top-1000 && !showed[7]){
      $('#shower-7').removeClass('shower-down3', 700);
      showed[7] = true;
    }


    if ($(this).scrollTop() > $("#step-1").offset().top-800){
      $("#step-1").animate({opacity: 1}, 300);
    }
    if ($(this).scrollTop() > $("#step-2").offset().top-750){
      $("#step-2").animate({opacity: 1}, 300);
    }
    if ($(this).scrollTop() > $("#step-3").offset().top-725){
      $("#step-3").animate({opacity: 1}, 300);
    }
    if ($(this).scrollTop() > $("#step-4").offset().top-700){
      $("#step-4").animate({opacity: 1}, 300);
    }
    if ($(this).scrollTop() > $("#step-5").offset().top-675){
      $("#step-5").animate({opacity: 1}, 300);
    }
    if ($(this).scrollTop() > $("#step-6").offset().top-650){
      $("#step-6").animate({opacity: 1}, 300);
    }

    if ($(this).scrollTop() > $(".features").offset().top-880){
          $('.feature:first').animate({opacity: 1}, 550);
          $('.feature:nth(1)').delay(250).animate({opacity: 1}, 550);
          $('.feature:nth(2)').delay(400).animate({opacity: 1}, 550);
          $('.feature:nth(3)').delay(550).animate({opacity: 1}, 550);
    }

    if ($(this).scrollTop() > $(".investors").offset().top-600){
          $('.logo-link2:first').delay(280).animate({opacity: 1}, 550);
          $('.logo-link2:nth(1)').delay(350).animate({opacity: 1}, 550);
          $('.logo-link2:nth(2)').delay(500).animate({opacity: 1}, 550);
          $('.logo-link2:nth(3)').delay(700).animate({opacity: 1}, 550);
          $('.logo-link2:nth(4)').delay(900).animate({opacity: 1}, 550);
          $('.inv-text').delay(1000).animate({opacity: 1}, 1000);
    }

    if ($(this).scrollTop() > $(".av1").offset().top-760){
          $('.avatar:first').animate({opacity: 1}, 550);
          $('.avatar:nth(1)').delay(150).animate({opacity: 1}, 500);
          $('.avatar:nth(2)').delay(300).animate({opacity: 1}, 500);
          $('.avatar:nth(3)').delay(450).animate({opacity: 1}, 500);
          $('.avatar:nth(4)').delay(600).animate({opacity: 1}, 500);
          $('.avatar:nth(5)').delay(750).animate({opacity: 1}, 500);
          $('.avatar:nth(6)').delay(900).animate({opacity: 1}, 500);
          $('.avatar:nth(7)').delay(1050).animate({opacity: 1}, 500);
    }

    if ($(this).scrollTop() > $(".av2").offset().top-720){
          $('.avatar:nth(8)').animate({opacity: 1}, 500);
          $('.avatar:nth(9)').delay(150).animate({opacity: 1}, 500);
          $('.avatar:nth(10)').delay(300).animate({opacity: 1}, 500);
    }

});



$('.v-dot').click(function(){
  var vid = $(this).attr('id').charAt(3);
  var x = 0;
  if(vid==1){
    x = $("#shower-1").offset().top;
  }else if(vid==2){
    x = $("#shower-2").offset().top;

  }else if(vid==3){
    $('#shower-2').removeClass('shower-down2', 1);
    //$('#shower-3').removeClass('shower-down', 1);
    setTimeout(function(){
      x = $("#shower-3").offset().top;
      if(!showed[3])
        x-=100;
    }, 10);
  }else if(vid==4){
    $('#shower-2').removeClass('shower-down2', 1);
    $('#shower-3').removeClass('shower-down', 1);
    setTimeout(function(){
      x = $("#shower-4").offset().top;
      if(!showed[4])
        x-=100;
    }, 10);
  }else if(vid==5){
    $('#shower-2').removeClass('shower-down2', 1);
    $('#shower-3').removeClass('shower-down', 1);
    $('#shower-4').removeClass('shower-down', 1);
    setTimeout(function(){
      x = $("#shower-5").offset().top;
      if(!showed[5])
        x-=100;
    }, 10);
  }else if(vid==6){
    $('#shower-2').removeClass('shower-down2', 1);
    $('#shower-3').removeClass('shower-down', 1);
    $('#shower-4').removeClass('shower-down', 1);
    $('#shower-5').removeClass('shower-down', 1);
    setTimeout(function(){
    x = $("#shower-8").offset().top;
    if(!showed[6])
      x-=100;
  }, 10);

  }else if(vid==7){
    $('#shower-2').removeClass('shower-down2', 1);
    $('#shower-3').removeClass('shower-down', 1);
    $('#shower-4').removeClass('shower-down', 1);
    $('#shower-5').removeClass('shower-down', 1);
    $('#shower-8').removeClass('shower-down', 1);
    setTimeout(function(){
    x = $("#shower-6").offset().top;
    x-=100;
    if(!showed[7])
      x-=150;
    }, 10);
  }
  setTimeout(function(){
    x-=200;
    window.scrollTo({ top: x, behavior: 'smooth' });
  }, 11);
});




//logo slider
var position = 0;
var positionInt = 1;
var last = 4;
$('#ch-left').click(function(){
  if ($( window ).width() > 1000) {
    var l = $('.logo-link').length-last;
    if(position!=0){
      position += 160;
      last--;
      $('.logos').animate({left: position});
    }
  }else{
    var l = $('.logo-link').length;
    if(positionInt > 1){
      positionInt--;
      position += 160;
      last--;
      $('.logos').animate({left: position});
    }
  }
});

$('#ch-right').click(function(){
  if ($( window ).width() > 1000) {
    var l = $('.logo-link').length-last;
    if(l != 0){
      position -= 160;
      last++;
      $('.logos').animate({left: position});
    }
  }else{
    var l = $('.logo-link').length;
    if(l > positionInt){
      positionInt++;
      position -= 160;
      last++;
      $('.logos').animate({left: position});
    }
  }
});

var open = false;
$('#tab').click(function(){
  if(!open){
    $('#menu').animate({left: 0});
    open = true;
  }else {
    $('#menu').animate({left: '-100%'});
    open = false;
  }
});



$('#lang').click(function(){
    $('#langs').animate({right: '0%'});
});

$('#cls-langs').click(function(){
    $('#langs').animate({right: '-50%'});
});


function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "#1c2d41",
    "#6c6f20",
    "#38a897",
    "#644d3d",
    "#c6593b",
    "#b07d22",
    "#b02255",
    "#b5b5b5",
    "#6722b0",
    "gray"
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");

