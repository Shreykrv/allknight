(function ($) {
    "use strict";
    $(".mean-menu").meanmenu({ meanScreenWidth: "991" });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) {
            $(".navbar-area").addClass("is-sticky");
            $(".navbar-area").removeClass("float");
            // Additional changes you might want to uncomment and use:
            // $(".navbar-area").removeClass("bg-transparent");
            // $(".navbar-area").addClass("bg-red");
            // $(".nav-item a").removeClass("text-dark");
            // $(".nav-item a").removeClass("z-relative");
        } else {
            $(".navbar-area").addClass("float");
            $(".navbar-area").removeClass("is-sticky");
            // Additional changes you might want to uncomment and use:
            // $(".navbar-area").removeClass("bg-red");
            // $(".navbar-area").addClass("bg-transparent");
            // $(".nav-item a").addClass("text-dark");
            // $(".nav-item a").addClass("z-relative");
        }
        
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) {
            $(".go-top").addClass("active");
        } else {
            $(".go-top").removeClass("active");
        }
    });
    
   
     
      
    $(".offer-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        mouseDrag: true,
        thumbs: false,
        thumbsPrerendered: true,
        items: 1,
        dots: false,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        animateOut: "slideOutDown",
        animateIn: "slideInDown",
    });
    // $("#thumbs").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     margin: 0,
    //     smartSpeed: 1500,
    //     responsive: { 0: { items: 4 }, 576: { items: 4 }, 768: { items: 4 }, 992: { items: 4 }, 1200: { items: 4 } },
    // });
    $(".product-categories-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 0,
        smartSpeed: 1500,
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
    });
    $(".testimonials-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
    });
    $(".feedback-slider").owlCarousel({ items: 1, loop: true, margin: 0, nav: false, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true });
    $(".featured-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 30,
        smartSpeed: 1500,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 2 }, 1200: { items: 3 } },
    });
    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
    });
    $(".partner-slider").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: { 0: { items: 2 }, 414: { items: 2 }, 576: { items: 3 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 4 } },
    });
    $(".related-product").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: { 0: { items: 1 }, 414: { items: 2 }, 576: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
    });
    $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 50);
    });
    $(".accordion")
        .find(".accordion-title")
        .on("click", function () {
            $(this).toggleClass("active");
            $(this).next().slideToggle("fast");
            $(".accordion-content").not($(this).next()).slideUp("fast");
            $(".accordion-title").not($(this)).removeClass("active");
        });
    function makeTimer() {
        var endTime = new Date("november  30, 2021 17:00:00 PDT");
        var endTime = Date.parse(endTime) / 1000;
        var now = new Date();
        var now = Date.parse(now) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 300);
    $(window).on("load", function () {
        $(".preloader").addClass("preloader-deactivate");
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass("hide");
        }, 4000);
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000);
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
    }
	
  
	
    $(".others-option-for-responsive .dot-menu").on("click", function () {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    if ($(".wow").length) {
        var wow = new WOW({ mobile: false });
        wow.init();
    }
    $(".burger-menu").on("click", function () {
        $(".sidebar-modal").toggleClass("active");
    });
    $(".sidebar-modal-close-btn").on("click", function () {
        $(".sidebar-modal").removeClass("active");
    });
   
	$(".accordion-widget")
        .find(".accordion-widget-title")
        .on("click", function () {
            $(this).toggleClass("active");
            $(".accordion-widget-content").toggleClass("open");
            $(this).next().slideToggle("800");
        });
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
    $(".tab ul.tabs li").on("click", function (g) {
        var tab = $(this).closest(".tab"),
            index = $(this).closest("li").index();
        tab.find("ul.tabs > li").removeClass("current");
        $(this).closest("li").addClass("current");
        tab.find(".tab_content")
            .find("div.tabs_item")
            .not("div.tabs_item:eq(" + index + ")")
            .slideUp();
        tab.find(".tab_content")
            .find("div.tabs_item:eq(" + index + ")")
            .slideDown();
        g.preventDefault();
    });
    $(".input-counter").each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find(".plus-btn"),
            btnDown = spinner.find(".minus-btn"),
            min = input.attr("min"),
            max = input.attr("max");
        btnUp.on("click", function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on("click", function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    var syncedSecondary = true;
    bigimage
        .owlCarousel({ items: 1, slideSpeed: 2000, nav: true, autoplay: false, dots: false, loop: true, responsiveRefreshRate: 200, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"] })
        .on("changed.owl.carousel", syncPosition);
    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({ items: 5, dots: false, nav: false, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], smartSpeed: 200, slideSpeed: 500, slideBy: 4, responsiveRefreshRate: 100 })
        .on("changed.owl.carousel", syncPosition2);
    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        thumbs.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs.find(".owl-item.active").first().index();
        var end = thumbs.find(".owl-item.active").last().index();
        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }
    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
})(jQuery);

function toggleContent() {
    const extraContent = document.querySelector('.extra-content');
    const button = document.getElementById('toggle-button');

    if (extraContent.style.display === 'none') {
        // Show extra content
        extraContent.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        // Hide extra content
        extraContent.style.display = 'none';
        button.textContent = 'Show More';
    }
}

$(document).ready(function() {
    // Expand section logic
    $(document).on('click', '.bx-plus', function() {
        var $expandSection = $(this).closest('.cart-table-box').find('.expand');

        // Remove d-none and calculate the actual height
        $expandSection.removeClass('d-none').css('height', 'auto');
        var actualHeight = $expandSection.outerHeight(); // Get the full height

        // Reset the height to 0 for the animation, and animate to the actual height
        $expandSection.css('height', '0').animate({height: actualHeight}, 300);

        // Switch icons
        $(this).removeClass('bx-plus').addClass('bx-minus');
    });

    // Collapse section logic
    $(document).on('click', '.bx-minus', function() {
        var $expandSection = $(this).closest('.cart-table-box').find('.expand');

        // Animate height to 0, then hide the element
        $expandSection.animate({height: '0'}, 300, function() {
            $(this).addClass('d-none'); // After animation, hide the element
        });

        // Switch icons
        $(this).removeClass('bx-minus').addClass('bx-plus');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('textContent');
    const toggleBtn = document.getElementById('toggleBtn');
    const fullText = content.textContent.trim();
    const shortText = fullText.substring(0, 50);

    // Function to check screen width and apply the toggle functionality
    function applyToggle() {
        if (window.innerWidth < 763) {
            // Display the toggle button when the screen is less than 763px
            toggleBtn.style.display = "inline";
            toggleBtn.style.color = "white";
            content.textContent = shortText + "...";
            toggleBtn.textContent = "Read more";
            let isExpanded = false;

            toggleBtn.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent the default anchor behavior
                if (!isExpanded) {
                    content.textContent = fullText;
                    toggleBtn.textContent = "Read less";
                } else {
                    content.textContent = shortText + "...";
                    toggleBtn.textContent = "Read more";
                }
                isExpanded = !isExpanded; // Toggle the state
            });
        } else {
            // If the screen is larger, show the full text and hide the toggle button
            toggleBtn.style.display = "none";
            content.textContent = fullText; // Show full text on larger screens
        }
    }

    // Apply the toggle functionality on initial load
    applyToggle();

    // Reapply the toggle functionality on window resize
    window.addEventListener('resize', applyToggle);
});





