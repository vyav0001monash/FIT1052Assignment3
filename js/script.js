let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.cs-item');
    const totalItems = items.length;
    const visibleItems = 3; 
    const slideWidth = items[0].clientWidth + 20; 

    currentIndex += direction * visibleItems;


    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const translateXValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
}




$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "close"
        ]
    });
});

