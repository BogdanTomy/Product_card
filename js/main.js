
document.addEventListener("DOMContentLoaded", function(event) {
  
  /* ----- Slider ----- */

  var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };

    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });

    prev.addEventListener("click", function() {
      prevSlide();
    });
  };

  window.onload = function() {
    responsiveSlider();  
  }


  
  // var colorPagIndex = parseInt(event.target.getAttribute('data-index'));



  /* ----- Add Good ----- */

  var addGoodBtn = document.getElementById("pag-right");
  var removeGoodBtn = document.getElementById("pag-left");
  var good = document.getElementById("good-count").innerHTML;
  var goodCount = parseInt(good);
  var prise = document.getElementById("prise").innerHTML;
  var totalPrise = parseInt(prise);
  var priseConst = 140;

  var addGood = function() {
    if (goodCount <= 9) {
      goodCount ++
      document.getElementById("good-count").innerHTML = goodCount;
      totalPrise = totalPrise + priseConst
      document.getElementById("prise").innerHTML = totalPrise;
    }
  };

  var removeGood = function() {
    if(goodCount >= 2) {
      goodCount --
      document.getElementById("good-count").innerHTML = goodCount;
      totalPrise = totalPrise - priseConst
      document.getElementById("prise").innerHTML = totalPrise;
    }
  };

  addGoodBtn.addEventListener("click", function() {
    addGood();
  });

  removeGoodBtn.addEventListener("click", function() {
    removeGood();
  });
  
  /* ----- Star Rateing ----- */

  var rateing = document.querySelector(".product-stars");
  var rateingItem = document.querySelectorAll(".product-star");

  function removeSrc(arr) {
      for (var i = 0, iLen = arr.length; i < iLen; i++) {
        rateingItem[i].src = "img/star-32.png";
      };
    };

  rateing.addEventListener("click", function(e) {
    var target = e.target;
    var targetId = target.getAttribute("data-rate");

    if (target.classList.contains("product-star")) {
      removeSrc(rateingItem)

      for(var i = 0, iLen = rateingItem.length; i < iLen; i++){

        if (rateingItem[i].getAttribute("data-rate") <= targetId){
            rateingItem[i].src = "img/star_filled-32.png";
            rateingItem[i].classList.add("current-active");
        }
      }
    }
  });

});