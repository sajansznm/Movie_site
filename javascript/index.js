let scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    smoothScrollToTop();
});

function smoothScrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}



