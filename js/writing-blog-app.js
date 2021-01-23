// Check if the URL points to a specific page

// Set new URL
function setURL(hash) {
    window.location.hash = hash;
}

// Set template variables
var article = "ajax/article.html";
var entry = "ajax/entry.html";
var entryContainer = "ajax/entry-container.html";

// Show Loader
var showLoading = function(selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
};

// Jinja insert function
var insertProperty = function(string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string
        .replace(new RegExp(propToReplace, "g"), propValue);
    return string;
};

// Insert into HTML
var insertHtml = function(selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};

// Fetch a certain category
function fetch_category(hash) {
    // Set hash of current page
    setURL(hash);
    // Fetch Entries
    var category = hash.substring(1);
    $.getJSON("data/" + category + ".json", function(articles) {
        html = "";
        // fetch template
        $.get(entryContainer, function(_entryContainer) {
            showLoading("#category-ajax")
            html = _entryContainer;
            // Build HTML
            $.get(entry, function(_entry) {
                list_of_entries = ""
                for (narticle of articles) {
                    currentEntry = insertProperty(_entry, "image", narticle.image);
                    currentEntry = insertProperty(currentEntry, "title", narticle.title);
                    currentEntry = insertProperty(currentEntry, "category", narticle.category);
                    currentEntry = insertProperty(currentEntry, "credits", narticle.credits);
                    currentEntry = insertProperty(currentEntry, "desc", narticle.desc);
                    currentEntry = insertProperty(currentEntry, "brief", narticle.brief);
                    currentEntry = insertProperty(currentEntry, "nyear", narticle.nyear);
                    currentEntry = insertProperty(currentEntry, "order", narticle.order);
                    list_of_entries += currentEntry;
                }
                // Insert HTML
                html = insertProperty(html, "content", list_of_entries);
                insertHtml("#category-ajax", html);
                // Add Active
                $("#" + category + "-icon").addClass("active");
            });
        });
        // Rebind back button
        rebind(home_fn);
        $("#back").removeClass("remove");
    });
};

// Fetch article
function fetch_article(id, category) {
    // Adjust ID
    id--;
    // Fetch JSON
    $.getJSON("data/" + category.toLowerCase() + ".json", function(articles) {
        showLoading("#article-ajax")
        html = "";
        $.get(article, function(_entry) {
            // Call the entry from the JSON
            $e = articles[id];
            // Set hash of current page
            setURL("#" + category.toLowerCase() + "?title=" + $e.title.toLowerCase() + "&id=" + $e.order);
            // Scroll to top
            scroll();
            // Build HTML
            currentArticle = insertProperty(_entry, "image", $e.image);
            currentArticle = insertProperty(currentArticle, "image", $e.image);
            currentArticle = insertProperty(currentArticle, "title", $e.title);
            currentArticle = insertProperty(currentArticle, "credits", $e.credits);
            currentArticle = insertProperty(currentArticle, "content", $e.content);
            currentArticle = insertProperty(currentArticle, "side", $e.side);
            currentArticle = insertProperty(currentArticle, "category", $e.category);
            currentArticle = insertProperty(currentArticle, "year", $e.year);
            html += currentArticle;
            console.log(html);
            // Insert HTML
            insertHtml("#article-ajax", html);
        });
    });
}

function fetch_article_caller(id, category) {
    fetch_article(id, category);
    slide_out("#category-ajax");
    slide_in("#article-ajax");

    function fn() {
        fetch_category("#" + category);
        slide_off("#article-ajax");
        slide_back("#category-ajax");
        scroll();
        rebind(home_fn);
    }
    rebind(fn);
}

// Return to categories from any page
function goHome(from) {
    slide_off(from);
    slide_back("#categories");
    $("#back").addClass("remove");
    $('.menu li').removeClass("active");
    scroll();
    setURL("#section-2");
}

function home_fn() {
    goHome("#category-ajax");
}

// Rebind back button
function rebind(fn) {
    var $back = $("#back");
    var onClick = $back[0].onclick;
    $back.unbind('click', onClick);
    $back.attr('onclick', null);
    $back.on('click', fn);
}

// Animation Functions
gsap.defaults({ ease: "power3.inOut", duration: 1 });

var tl = gsap.timeline();

function slide_out(_el) {
    tl.call(reset, [_el]).to($(_el), {
        x: "-100%",
        opacity: 0,
        display: "none"
    });
}

function slide_in(_el) {
    gsap.set($(_el), { display: "block", opacity: 1, x: 0 });
    tl.from($(_el), {
        x: "100%",
        opacity: 0,
        display: "none",
    });
}

function slide_back(_el) {
    tl.call(reset, [_el, 1]).to($(_el), {
        x: 0,
        opacity: 1,
    });
}

function slide_off(_el) {
    tl.call(reset, [_el]).to($(_el), {
        x: "100%",
        opacity: 0,
        display: "none"
    });
}

function reset(_el, y) {
    if (y == "1") {
        gsap.set($(_el), { display: "block" });
    } else {
        gsap.set($(_el), { display: "block", opacity: 1, x: 0 });
    }
}

function scroll() {
    $('html, body').animate({
        scrollTop: ($("#section-2").offset().top - 110)
    }, 800);
}

$(document).ready(function() {

    // Listeners
    $('.category-card').click(function() {
        hash = $(this).data("target");
        fetch_category(hash);
        slide_out('#categories');
        slide_in("#category-ajax");
        scroll();
    });

    $('.menu li').click(function() {
        hash = $(this).data("target");
        if ($("#back").hasClass("remove")) {
            slide_out('#categories');
        }
        $('.menu li').removeClass("active");
        slide_off("#article-ajax");
        fetch_category(hash);
        slide_in("#category-ajax");
        scroll();
    });

});