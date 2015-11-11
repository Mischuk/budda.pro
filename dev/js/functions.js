$(document).ready(function(){
  //Functions

  function orderSteps() {
    $('.order-form').validate({
      settings: {
          clear: "keypress",
          errorClass: 'custom-error',
          errorListClass: 'custom-error-list',
          inputContainer: '.field'
      },
      messages: {
        'NOTEMPTY': 'Не верно',
        'EMAIL': 'Не верно',
        'NUMERIC': 'Не верно'
      },
      submit: {
        callback: {
          onSubmit: function (input) {
            if ($(input).parent().hasClass('step-3')){
              alert('Потрачено!');
              return false;
            } else{
              if($(input).parent().hasClass('step-2')){
                $(input).parent().addClass('step-ready').fadeOut(500);
                $(input).parent().next().removeClass('step-ready').delay(500).fadeIn(1000);
                $('.order-sidebar ul').find('li').eq(2).find('a').removeClass('disabled').addClass('active');
              } else{
                if($(input).parent().hasClass('step-1')){
                  $(input).parent().addClass('step-ready').fadeOut(500);
                  $(input).parent().next().removeClass('step-ready').delay(500).fadeIn(1000);
                  $('.order-sidebar ul').find('li').eq(1).find('a').removeClass('disabled').addClass('active');
                }
              }
            }
          }
        }
      },
      dynamic: {
        settings: {
            trigger: 'focusout'
        },
        callback: {
          onSuccess: function (node, input, keyCode) {
            if ($(input).val()) {
              $(input).parent().addClass('green');
            }
          },
          onError: function (node, input, keyCode, error) {
            $(input).parent().removeClass('green');
          }
        }
      }
    });
    $('.step-2, .step-3').fadeOut();
    $('body').on('click', '#go-step-1.active', function(){
      $('.step-2, .step-3').addClass('step-ready').fadeOut(250);
      $('.step-1').removeClass('step-ready').delay(250).fadeIn(500);
    });
    $('body').on('click', '#go-step-2.active', function(){
      $('.step-3, .step-1').addClass('step-ready').fadeOut(250);
      $('.step-2').removeClass('step-ready').delay(250).fadeIn(500);
    });
    $('body').on('click', '#go-step-3.active', function(){
      $('.step-1, .step-2').addClass('step-ready').fadeOut(250);
      $('.step-3').removeClass('step-ready').delay(250).fadeIn(500);
    });
  };

  function deliveryOrder() {
    $('.radio-custom-delivery input').on('change', function(){
      if ($(this).hasClass('delivery-type-1')) {
        $('.total-order .row.delivery-type-2').hide();
        $('.total-order .row.delivery-type-1').show();
      } else {
        $('.total-order .row.delivery-type-1').hide();
        $('.total-order .row.delivery-type-2').show();
      }
    });

    $('.delivery-radius input').on('change', function(){
      if ($(this).hasClass('delivery-radius-1')) {
        $('.zona').html('A');
        $('.zona-price').html('500');

      } else {
        if ($(this).hasClass('delivery-radius-2')) {
          $('.zona').html('B');
          $('.zona-price').html('1500');
        } else {
          if ($(this).hasClass('delivery-radius-3')) {
            $('.zona').html('B');
            $('.zona-price').html('2500');
          }
        }
      }
    });
  };


  function leadCarousel() {
    $('.slick').slick({
      slidesToShow: 6,
      touchMove: false,
      swipe: false,
      draggable: false
    });
  };

  function goTop() {
    $(".go-to-top a").click(function() {
        $('html, body').animate({
            scrollTop: $(".container").offset().top
        }, 1000);
    });
  };

  function gallery() {
    $("#cart-gallery").responsiveSlides({
      manualControls: '#cart-gallery-page',
      auto: false
    });
    $('#cart-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        }

      });
  };

  function incrementers() {
    var $counter = $(".counter-inp");
    $counter.keyup(function(e) {
        var $this = $(this);
        var val = $this.val();
        if (val > 100){
            e.preventDefault();
            $this.val(100);
            var currentPrice = parseInt($(this).parent().parent().find('.single-price').find('span').text(), 10);
            $(this).parent().parent().find('.total-price').find('span').html(currentPrice*100);
        }
        else if (val < 1)
        {
            e.preventDefault();
            $this.val(1);
             var currentPrice = parseInt($(this).parent().parent().find('.single-price').find('span').text(), 10);
            $(this).parent().parent().find('.total-price').find('span').html(currentPrice);
        }
    });
    $counter.keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          return false;
       }
      });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('.counter-inp').on('change', function(){
      var count = $(this).val();
      var currentPrice = parseInt($(this).parent().parent().find('.single-price').find('span').text(), 10);
      $(this).parent().parent().find('.total-price').find('span').html(currentPrice*count);
    });
  };

  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.go-to-top').addClass('show');
     } else{
        $('.go-to-top').removeClass('show');
     }
  });

  function accordion() {
      $('.accordion-content').hide();
      $('.accordrion-item-link').on('click', function (e) {
          if($(this).next().hasClass('opened')){
            $('.accordion-content').removeClass('opened').slideUp('fast');
            $('.accordrion-item-link').removeClass('active');
            e.preventDefault();
          } else {
            $('.accordrion-item-link').removeClass('active');
            $('.accordion-content').removeClass('opened').slideUp('fast');
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).next().toggleClass('opened').slideToggle('fast');
          }
      });
  };

  function etc() {
    $('a[href=#]').click(function(e){
      e.preventDefault()
    });
  };

  //Func init
  leadCarousel();
  goTop();
  gallery();
  incrementers();
  etc();
  accordion();
  orderSteps();
  deliveryOrder();
});

