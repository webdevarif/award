;
(function($) {
    
    var header = $('.header-area, .mobile-header');
    $(window).scroll(function () {
    var scroll = $(window).scrollTop()

    if (scroll >= 250) {
        header.addClass('sticky-menu')
    } else {
        header.removeClass('sticky-menu')
    }
    });

    $(document).ready(function() {
    
        /*-------------------------------------------------------------------------------
        javaScript for offcanvas
        -------------------------------------------------------------------------------*/
        $(".menu-trigger").on("click", function() {
            $(".offcanvas-header").addClass("active");
            $(".menu-trigger").hide();
            $(".menu-close, .drawer-overlay").show();
        });
        $(".menu-close, .drawer-overlay").on("click", function() {
            $(".offcanvas-header").removeClass("active");
            $(".menu-close, .drawer-overlay").hide();
            $(".menu-trigger").show();
        });

        // SUBMENU
        $(".has-submenu .nav-link").on("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Find the submenu related to the clicked menu item
            var submenu = $(this).siblings(".submenu-dropdown");

            // Toggle the submenu visibility by sliding it up or down
            submenu.slideToggle(300);
        });

        /*-------------------------------------------------------------------------------
        testimonial Slider 
        -------------------------------------------------------------------------------*/
        $('.step-slider-wrap').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

        /*-------------------------------------------------------------------------------
        testimonial Slider 
        -------------------------------------------------------------------------------*/
        // Function to initialize or unslick the slider based on screen width
        function initializeSlider() {
            if (window.innerWidth < 1280) {
                // Initialize Slick for mobile.
                $('.window-slider-wrap').slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: true,
                    prevArrow: '<span class="prev"><svg><use xlink:href="#icon-long-arrow-left"></use></svg></span>',
                    nextArrow: '<span class="next"><svg><use xlink:href="#icon-long-arrow-right"></use></svg></span>',
                    responsive: [{
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }]
                });
            } else {
                // If the screen width is above the breakpoint, check if the slider is initialized and unslick if necessary.
                if ($('.window-slider-wrap').hasClass('slick-initialized')) {
                    $('.window-slider-wrap').slick('unslick');
                }
            }
        }

        // Call the function to initialize the slider on page load
        initializeSlider();
        
        // Update the slider on window resize
        $(window).on('resize', function() {
            initializeSlider();
        });

        /*-------------------------------------------------------------------------------
        testimonial Slider 
        -------------------------------------------------------------------------------*/
        $('.doors-slider-wrap').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

        /*-------------------------------------------------------------------------------
        testimonial Slider 
        -------------------------------------------------------------------------------*/
        $('.review-slider-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<span class="prev"><svg><use xlink:href="#icon-long-arrow-left"></use></svg></span>',
            nextArrow: '<span class="next"><svg><use xlink:href="#icon-long-arrow-right"></use></svg></span>',
            fade: false
        });

        /*------------------------------
		Javascript for magnificPopup
		-------------------------------*/
        $('.img-popup-link').imageLightbox({
            button: true,
            quitOnDocClick: false,
            history: true,
            overlay: true,
            activity: true,
        });

    });
}(jQuery));