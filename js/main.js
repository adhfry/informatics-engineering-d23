(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm')
            $('#inf').removeClass('text-dark').addClass('text-primary')
            $('#part').removeClass('text-dark').addClass('text-primary')
        } else {
            $('#inf').addClass('text-dark').removeClass('text-primary')
            $('#part').addClass('text-dark').removeClass('text-primary')
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    $(document).ready(function() {
    $.getJSON('assets/data/data.json', function(data){
        var content = '';
        var delay = 0.0;
        $.each(data, function(key, value){
            content += `
            <div
                class="col-lg-4 col-md-6 portfolio-item boy wow zoomIn"
                data-wow-delay="${delay}s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="w-100 object-fit-cover"
                    src="${value.profilePicture}"
                    height="400"
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="${value.profilePicture}"
                      data-lightbox="portfolio"
                      ><i class="fa fa-plus fa-2x text-primary"></i
                    ></a>
                    <div class="mt-auto">
                      <small class="text-white"
                        ><i class="fa fa-folder me-2"></i>${value.softskill}</small
                      >
                      <a
                        class="h5 d-block text-white mt-1 mb-0"
                        href="https://instagram.com/${value.instagramUsername? value.instagramUsername : ""}"
                        >${value.namaLengkap}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            `
            delay += 0.3;
        })
        $('#galleryContainer').html(content)
    })
});

    
})(jQuery);

