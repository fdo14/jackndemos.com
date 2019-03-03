function clickRight(){
  var half = $("#center").parent().width() / 2 - $("#left").width() / 2;
  var negHalf = half * (-1);
  $("#right").animate({
      left: negHalf
  }, 500);
  $("#center").animate({
      left: negHalf
  }, 500);

  $("#left").animate({left: negHalf
  }, 500);

  var nodes = document.getElementById('right').childNodes;
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div' && nodes[i].classList.contains("hidden")) {
        nodes[i].classList.remove("hidden");
     } else if (nodes[i].nodeName.toLowerCase() == 'div' && nodes[i].classList.contains("innerCenter")) {
         nodes[i].classList.remove("offCenter");
      }
   }

   var nodesCenter = document.getElementById('center').childNodes;
   for(var i=0; i<nodesCenter.length; i++) {
     if (nodesCenter[i].nodeName.toLowerCase() == 'div' && (nodesCenter[i].classList.contains("innerLeft") || nodesCenter[i].classList.contains("innerRight"))) {
         $(nodesCenter[i]).addClass('hidden', 1000);
      } else if (nodesCenter[i].nodeName.toLowerCase() == 'div' && nodesCenter[i].classList.contains("innerCenter")) {
          $(nodesCenter[i]).addClass('offCenter');
       }
    }
    document.getElementById('center').setAttribute('onclick', 'clickLeftToHome()');
}

function clickRightToHome(){
  $("#center").animate({
      'left': '0'
  }, 500);
  $("#left").animate({
      'left': '0'
  }, 500);
  $("#right").animate({
      'left': '0'
  }, 500);

  var nodesCenter = document.getElementById('center').childNodes;
  for(var i=0; i<nodesCenter.length; i++) {
    if (nodesCenter[i].nodeName.toLowerCase() == 'div' && (nodesCenter[i].classList.contains("innerLeft") || nodesCenter[i].classList.contains("innerRight"))) {
        $(nodesCenter[i]).removeClass('hidden', 1000);
     } else if (nodesCenter[i].nodeName.toLowerCase() == 'div' && nodesCenter[i].classList.contains("innerCenter")) {
         $(nodesCenter[i]).removeClass('offCenter');
      }
   }

   var nodes = document.getElementById('left').childNodes;
   for(var i=0; i<nodes.length; i++) {
     if (nodes[i].nodeName.toLowerCase() == 'div' && (nodes[i].classList.contains("innerLeft") || nodes[i].classList.contains("innerRight"))) {
         $(nodes[i]).addClass('hidden', 1000);
      } else if (nodes[i].nodeName.toLowerCase() == 'div' && nodes[i].classList.contains("innerCenter")) {
          $(nodes[i]).addClass('offCenter');
       }
    }
}

function clickLeftToHome(){
  $("#center").animate({
      'left': '0'
  }, 500);
  $("#left").animate({
      'left': '0'
  }, 500);
  $("#right").animate({
      'left': '0'
  }, 500);

  var nodesCenter = document.getElementById('center').childNodes;
  for(var i=0; i<nodesCenter.length; i++) {
    if (nodesCenter[i].nodeName.toLowerCase() == 'div' && (nodesCenter[i].classList.contains("innerLeft") || nodesCenter[i].classList.contains("innerRight"))) {
        $(nodesCenter[i]).removeClass('hidden', 1000);
     } else if (nodesCenter[i].nodeName.toLowerCase() == 'div' && nodesCenter[i].classList.contains("innerCenter")) {
         $(nodesCenter[i]).removeClass('offCenter');
      }
   }

   var nodes = document.getElementById('right').childNodes;
   for(var i=0; i<nodes.length; i++) {
     if (nodes[i].nodeName.toLowerCase() == 'div' && (nodes[i].classList.contains("innerLeft") || nodes[i].classList.contains("innerRight"))) {
         $(nodes[i]).addClass('hidden', 1000);
      } else if (nodes[i].nodeName.toLowerCase() == 'div' && nodes[i].classList.contains("innerCenter")) {
          $(nodes[i]).addClass('offCenter');
       }
    }

}

function clickLeft(){
  $("#right").animate({
      left: $("#center").parent().width() / 2 - $("#left").width() / 2
  }, 500);
  $("#center").animate({
      left: $("#center").parent().width() / 2 - $("#left").width() / 2
  }, 500);

  $("#left").animate({left: $("#center").parent().width() / 2 - $("#left").width() / 2
  }, 500);

  var nodes = document.getElementById('left').childNodes;
  for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div' && nodes[i].classList.contains("hidden")) {
        nodes[i].classList.remove("hidden");
     } else if (nodes[i].nodeName.toLowerCase() == 'div' && nodes[i].classList.contains("innerCenter")) {
         nodes[i].classList.remove("offCenter");
      }
   }

   var nodesCenter = document.getElementById('center').childNodes;
   for(var i=0; i<nodesCenter.length; i++) {
     if (nodesCenter[i].nodeName.toLowerCase() == 'div' && (nodesCenter[i].classList.contains("innerLeft") || nodesCenter[i].classList.contains("innerRight"))) {
         $(nodesCenter[i]).addClass('hidden', 1000);
      }
      else if (nodesCenter[i].nodeName.toLowerCase() == 'div' && nodesCenter[i].classList.contains("innerCenter")) {
          $(nodesCenter[i]).addClass('offCenter');
       }
    }

    document.getElementById('center').setAttribute('onclick', 'clickRightToHome()');




}

$("#cool").click(function () {
  $(this).animate({
      left: $(this).parent().width() / 2 - $(this).width() / 2
  }, 500);
  $("#cool1").animate({
      left: $(this).parent().width() / 2 - $(this).width() / 2
  }, 500);
  $("#cool2").animate({left: "1000px"}, "fast");
});

$("#cool2").click(function () {
  $(this).animate({
      right: $(this).parent().width() / 2 - $(this).width() / 2
  }, 500);
  $("#cool1").animate({
      right: $(this).parent().width() / 2 - $(this).width() / 2
  }, 500);
  $("#cool").animate({right: "1000px"}, "fast");
});
