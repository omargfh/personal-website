$(document).ready(function() {
    // Custom script for (index.html) and pages other than (index.html)
    if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") {
        if (window.location.pathname === "/arts.html") {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 5000,
                margin: 50,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            })
        }

        $(window).on('load', function() {
            headerControl("onload");
            $('.navbar-toggler').click(function() {
                headerControl("onclick");
            });
        });

        $(window).on('resize', function() {
            headerControl("onload");
        });

        $(window).on('scroll', function() {
            headerControl("onscroll");
        });
    } else {
        $(document).ready(function() {
            $('.carousel-fast').carousel({
                interval: 1000
            });

            $(window).on('load', function() {
                headerControl("onload", "index");
                $('.navbar-toggler').click(function() {
                    headerControl("onclick", "index");
                });
            });

            $(window).on('resize', function() {
                headerControl("onload", "index");
                changeText("#right-down", 767, "To the right, you can see a picture of me during the last STEM Model UN!", "If you look down, you can see a picture of me during the last STEM Model UN!");
            });

            $(window).on('scroll', function() {
                headerControl("onscroll", "index");
                showElements('#section-2', 'card');
                showElements('#section-3-nav', 'timeline');
                showElements('#section-1-nav', 'section-1');
            });
        });
    }

    // Activate Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Particle Js
    particlesJS("particles-js", { "particles": { "number": { "value": 260, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
    // particlesJS("particles-js", { "particles": { "number": { "value": 100, "density": { "enable": false, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "star", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 4, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 14, "direction": "left", "random": false, "straight": true, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
    // particlesJS("particles-js", { "particles": { "number": { "value": 241, "density": { "enable": true, "value_area": 1341.5509907748635 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 10 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 8.017060304327606, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

    $(window).on('scroll', function() {
        $('.gallery-item').each(function(i, el) {
            el = $(el);
            if (isElementInViewport(el)) {
                el.addClass('gallery-item-hover');
            } else {
                el.removeClass('gallery-item-hover');
            }
        });
        // Uncolor (depends on jQuery plugin colormatrix)
        $('.color').each(function(i, el) {
            var color = $(el);
            if (isElementInViewport(color)) {
                color.removeClass('grayscale');
            }
        });
        // Hides scroll botton
        var scrollbtn = $('.scroll-btn');
        if ($(document).scrollTop() >= 385) {
            scrollbtn.removeClass('hidden');
        } else {
            scrollbtn.addClass('hidden');
        }
        // Count.js
        $(".count").each(function(i, el) {
            _el = $(el);
            if (isElementInViewport(el) && !_el.hasClass("counted")) {
                _el.addClass("counted");
                str = el.innerHTML;
                step = _el.data("step");
                num = Number(str);
                time = 1 * 1000 / num * step;
                time = _el.data("time") ? _el.data("time") * time : 2 * time;
                html = "";
                for (let i = 0, c = 0; Number((i).toFixed(1)) <= num; i += step, c++) {
                    if (_el.hasClass("count-float")) {
                        val = str.split(".");
                        n = val[0].length + val[1].length;
                        html = "";
                        if (i.toPrecision(n).length === n + 1) {
                            html = i.toPrecision(n);
                        } else {
                            html = i.toPrecision(n - 1);
                        }
                    } else {
                        html = i;
                    };
                    count(el, html, c, time);
                }
            }
        });
    });

    // $(window).on('load', function() {
    // Check for scroll/resize statuses to update DOM
    $('.scroll-behavior').scroll();
    $('.resize-behvior').resize();
    $('.color').scroll();
    $('.count').scroll();



    // Smooth-scrolling
    $('.scroll').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
        }
        $('html, body').animate({
            scrollTop: ($(hash).offset().top - 60)
        }, 800, function() {
            history.pushState({}, '', hash);
        });
    });

    // Image gallery (on "arts.html")
    $('.gallery-item').each(function(i, el) {
        el = $(el);
        el.mouseover(function() {
            if (el.children().prop('naturalWidth') >= el.width()) {
                // Extract data
                var image = new Image();
                image.src = el.children()[0].dataset.hover;
                image.onload = function() {
                    var update = $('.show-gallery-item-on-hover');
                    update.each(function(i, up) {
                        update = $(up);
                        update.css({
                            opacity: 0
                        });
                        update.html("");
                        update.html(image);
                        setTimeout(() => {
                            // Adjust preview dimensions (responsive)
                            var nH = update.children().prop('naturalHeight');
                            var nW = update.children().prop('naturalWidth');
                            if (update.children().prop('naturalWidth') > 2 * el.width() && nW >= nH) {
                                update.children().width(2 * el.width());
                                update.children().height(nH * ((2 * el.width()) / nW));
                            } else if (update.children().prop('naturalHeight') > 2 * el.width()) {
                                update.children().height(2 * el.width());
                                update.children().width(nW * ((2 * el.height()) / nH));
                            }

                            // Calculate new position
                            pos = el.parent().offset();
                            pos.right = Math.round(pos.left + el.width());
                            pos.bottom = Math.round(el.height() + pos.top);
                            pos.width = update.children().width() !== 0 ? update.children().width() : nW;
                            pos.height = update.children().height() !== 0 ? update.children().height() : nH;
                            pos.midY = (pos.top + pos.bottom) / 2;
                            pos.midX = (pos.left + pos.right) / 2;
                            pos.newY = Math.round(pos.midY - (pos.height / 2) - $('.navbar').offset().top) <= 72.5 ?
                                pos.top : pos.midY - pos.height / 2 >= 0 ?
                                pos.midY - pos.height / 2 : 0;
                            pos.newX = Math.round(pos.right - $(window).width()) >= -20 ?
                                pos.right - pos.width : pos.midX - pos.width / 2 >= 0 ?
                                pos.midX - pos.width / 2 : 0;

                            // Update elements

                            update.parent()[0].dataset.content = el.children()[0].dataset.popup;
                            update.parent()[0].dataset.flairs = el.children()[0].dataset.flairs;
                            if (el.children()[0].dataset.type === "XHTML") {
                                update.parent()[0].dataset.type = el.children()[0].dataset.type;
                            } else {
                                update.parent()[0].dataset.type = "image";
                            }
                            update.css({
                                top: pos.newY,
                                left: pos.newX,
                                zIndex: 10,
                                boxShadow: "0px 0px 10px rgba(32, 32, 32, 0.6)",
                                opacity: 0
                            });
                            update.animate({
                                opacity: 1
                            }, 600);
                            setTimeout(() => {
                                $('.show-gallery-item-on-hover').mouseleave();
                            }, 30000);
                        }, 50);
                    });
                }
            }

        });
        $('.show-gallery-item-on-hover').mouseleave(function(event) {
            this.innerHTML = "";
        });
    });

    // DOM Manipulation based on hover
    $('.img-bar').each(function(i, el) {
        var el_dom = $(el);
        el_dom.hover(function() {
            data = el.dataset;
            $('.img-bar').removeClass('active');
            el_dom.addClass('active');
            $('#program').html(el.alt);
            $('#years').html(data.years + "+ years");
            $('#projects').html("Notable projects: " + data.prj);
            $('.experience-bar-after').width(el.dataset.exp + "%");
        });
    });
    $('#img-active').mouseover();
    // Pop-ups
    $(function() {
        var popupcontent = $("#pop-up-content");
        var popupwindow = $("#pop-up-window");
        var popupclose = $("#pop-up-close");
        var flair = $('.flair');
        $('.pop-up-call').each(function(i, el) {
            $(el).click(function() {
                $('#pop-up').removeClass('remove');
                popupwindow.addClass('pop-up-window-animate');
                if (el.dataset.type === "XHTML") {
                    $('#close-image').removeClass('close-image');
                    popupcontent.html('<div style="display: flex; flex: 100%; width: 100%; height: 100%; align-items: center; justify-content: center;"><img src="https://i.stack.imgur.com/oQ0tF.gif" width="40px" alt="load"></div>');
                    $.ajax({
                        type: 'GET',
                        url: el.dataset.content,
                        success: function(data) {
                            popupcontent.html(data);
                        },
                        error: function(a, b) {
                            setTimeout(() => {
                                popupclose.click();
                            }, 1000)
                        }
                    });
                    $(window).resize(function(event) {
                        event.preventDefault();
                        popupwindow.width("90%");
                    });
                    $(window).resize();
                } else if (el.dataset.type === "image") {
                    var img = new Image();
                    img.src = el.dataset.content;
                    popupwindow.addClass('image-display').css("background-image", "url(./" + el.dataset.content + ")");
                    // Loop through flairs and append them
                    if (el.dataset.flairs !== "") {
                        var flairs = el.dataset.flairs.split(" ");
                        flairs.forEach(function(el, i) {
                            if (i % 2 == 0) {
                                $('.' + el).removeClass('remove');
                            } else {
                                $('.group').removeClass('remove');
                                $('.' + flairs[i - 1]).children()[0].href = el;
                            }
                        });
                    }
                    // Adjusts placement of "X" button and other flairs
                    img.onload = function() {
                        $(window).resize(function(event) {
                            var newWidth = img.width;
                            var newHeight = img.height;
                            if (img.height > 0.9 * $(window).height() && $(window).width() > 568) {
                                newWidth = img.width * (0.9 * $(window).height() / img.height);
                                popupwindow.width(newWidth);
                                if ($(window).width() < newWidth) {
                                    popupwindow.width("90%");
                                }
                            } else {
                                popupwindow.width("90%");
                            }
                            if (newWidth > 0.9 * $(window).width()) {
                                flair.addClass('flair-bottom');
                            } else {
                                flair.removeClass('flair-bottom');
                            }
                        });
                        $(window).resize();
                    }
                }
            });
        });
        popupclose.click(function() {
            // Remove the intro animation
            popupwindow.removeClass('pop-up-window-animate');
            // Animate the window close (delay for CSS render)
            setTimeout(() => {
                popupwindow.addClass('pop-up-window-close-animate');
            }, 200);
            setTimeout(() => {
                // Hide pop-up from workflow
                $('#pop-up').addClass('remove');
                // Remove content for XHTML pop-up calls
                popupcontent.html("");
                // Remove classes from window body
                popupwindow.removeClass('pop-up-window-close-animate').removeClass('image-display').width("90vh").css("background-image", "");
                // Hide flairs
                flair.addClass('remove');
                $('#close-image').addClass('close-image');
            }, 1200);
        });
        // Add change-on-hover effect
        $('.change-on-hover').each(function(i, el) {
            $(el).mouseover(function() {
                this.children[0].src = this.children[0].src.replace(".png", "-hover.png");
            });
            $(el).mouseleave(function() {
                this.children[0].src = this.children[0].src.replace("-hover.png", ".png");
            });
        });
    });

    // });
});

function isElementInViewport(el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function showElements(check, el) {
    if (isElementInViewport(document.querySelector(check))) {
        let elements = document.getElementsByClassName(el);
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains('visible-mobile')) {
                elements[i].classList.toggle('visible-mobile');
                var string = el + '-animate';
                elements[i].classList.toggle(string);
            } else {
                break;
            }
            setTimeout(() => { elements[i].classList.toggle(string) }, 900);
        }
    }
}

function changeText(el, wd, lg, sm) {
    let docref = $(el)[0];
    if (window.innerWidth <= wd) {
        docref.innerHTML = sm;
    } else {
        docref.innerHTML = lg;
    }
}

function headerControl(n, m) {
    var navbar = $('.navbar');
    var navbarbg = $('.navbar-bg');
    var chpic = $('#ch-pic');
    var headerflex = $('header-flex');
    var logo = $('#logo');
    if (n === "onclick") {
        navbarbg.toggleClass('hidden');
        if (m === "index") {
            chpic.removeClass('ch-pic-transit');
            $('#btn-learn-more-content').toggleClass('btn');
        }
        if (window.innerWidth < 991) {
            headerflex.toggleClass('visible-desktop');
        } else {
            headerflex.removeClass('hidden');
        }
    } else if (n === "onload") {
        if (m === "index") {
            let header = $('.workflow-header')[0];
            let img = $('#img-bg')[0];
            let header_height = img.clientHeight;
            header.style.height = parseInt(header_height) + "px";
        }
    } else if (n === "onscroll") {
        // Controls responsive behavior to scrolling
        navbarbg.addClass('hidden');
        $('#navbarSupportedContent').removeClass('show');
        headerflex.removeClass('visible-desktop');
        // Controls special behavior on index page
        if (m === "index") {
            chpic.addClass('ch-pic-transit');
            $('#btn-learn-more-content').addClass('btn');
        }
        // Controls color and logo of banner
        let rect = $('.bg')[0].getBoundingClientRect();
        var j = 400;
        if (m === "index") {
            j = 650;
        }
        if (rect.bottom <= j) {
            var scroll = $('.scroll');
            navbar.addClass('bg-light-onscroll');
            if (m === "index") {
                logo.addClass('logo-small');
            } else if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") {
                URI = "images/title-" + logo[0].dataset.alt + ".png";
                logo[0].src = URI;
                logo.css("max-height", "50px");
                if (window.location.pathname === "/code.html") {
                    navbar.addClass('bg-green');
                    // scroll.fadeTo("fast", 1);
                }
            }
        } else {
            logo[0].src = "images/logo-sm-wh.png";
            logo.css("max-height", "45px");
            navbar.removeClass('bg-light-onscroll');
            navbar.removeClass('bg-green');
            logo.removeClass('logo-small');
        }
    }
}

function count(el, html, c, time) {
    setTimeout(function() {
        el.innerHTML = html;
    }, time + time * c);
}