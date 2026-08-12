(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          dots:false
      },
      767:{
          items:1,
          dots:false
      },
      992:{
          items:1
      }
  }
});
// review-active
$('.testmonial_active').owlCarousel({
  loop:true,
  margin:30,
  items:1,
  autoplay:true,
  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1500:{
          items:1
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});
//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

})(jQuery);	

/* Start */

// ====================================
// PRACTICE AREA - SHOW MORE (8 Initially)
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const practiceItems = document.querySelectorAll('.practice-item');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const itemsToShow = 8; // 8 initially visible

    // Initially show 8 items
    practiceItems.forEach(function(item, index) {
        if (index >= itemsToShow) {
            item.style.display = 'none';
            item.classList.remove('show');
        } else {
            item.style.display = 'block';
            setTimeout(function() {
                item.classList.add('show');
            }, 100 * index);
        }
    });

    // Show More Button Click
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            practiceItems.forEach(function(item, index) {
                if (index >= itemsToShow) {
                    item.style.display = 'block';
                    setTimeout(function() {
                        item.classList.add('show');
                    }, 100 * (index - itemsToShow));
                }
            });
            showMoreBtn.style.display = 'none';
            if (showLessBtn) {
                showLessBtn.style.display = 'inline-block';
            }
        });
    }

    // Show Less Button Click
    if (showLessBtn) {
        showLessBtn.addEventListener('click', function() {
            practiceItems.forEach(function(item, index) {
                if (index >= itemsToShow) {
                    item.classList.remove('show');
                    setTimeout(function() {
                        item.style.display = 'none';
                    }, 500);
                }
            });
            showLessBtn.style.display = 'none';
            setTimeout(function() {
                if (showMoreBtn) {
                    showMoreBtn.style.display = 'inline-block';
                }
            }, 500);
        });
    }
});

// ====================================
// SERVICES - SHOW MORE (8 Initially)
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const showMoreBtn = document.getElementById('showMoreBtnServices');
    const showLessBtn = document.getElementById('showLessBtnServices');
    const itemsToShow = 8; // 8 initially visible

    // Initially show 8 items
    serviceItems.forEach(function(item, index) {
        if (index >= itemsToShow) {
            item.style.display = 'none';
            item.classList.remove('show');
        } else {
            item.style.display = 'block';
            setTimeout(function() {
                item.classList.add('show');
            }, 100 * index);
        }
    });

    // Show More Button Click
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            serviceItems.forEach(function(item, index) {
                if (index >= itemsToShow) {
                    item.style.display = 'block';
                    setTimeout(function() {
                        item.classList.add('show');
                    }, 100 * (index - itemsToShow));
                }
            });
            showMoreBtn.style.display = 'none';
            if (showLessBtn) {
                showLessBtn.style.display = 'inline-block';
            }
        });
    }

    // Show Less Button Click
    if (showLessBtn) {
        showLessBtn.addEventListener('click', function() {
            serviceItems.forEach(function(item, index) {
                if (index >= itemsToShow) {
                    item.classList.remove('show');
                    setTimeout(function() {
                        item.style.display = 'none';
                    }, 500);
                }
            });
            showLessBtn.style.display = 'none';
            setTimeout(function() {
                if (showMoreBtn) {
                    showMoreBtn.style.display = 'inline-block';
                }
            }, 500);
        });
    }
});

/// ====================================
// COUNTER ANIMATION (FIXED - NO NaN)
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function animateCounter(el) {
        const target = parseInt(el.textContent);
        const duration = 2000;
        const step = Math.max(1, Math.floor(target / 50));
        let current = 0;

        const update = () => {
            current += step;
            if (current >= target) {
                el.textContent = target;
                return;
            }
            el.textContent = current;
            requestAnimationFrame(update);
        };

        update();
    }

    function startCounters() {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
            }
        });
    }

    window.addEventListener('scroll', startCounters);
    window.addEventListener('load', function() {
        setTimeout(startCounters, 500);
    });
});