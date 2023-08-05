$('.progects_slider1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          },
    ]
});

let inpContainer = document.querySelectorAll('.group_row');
inpContainer.forEach(item => {
    let label = item.querySelector('label');
    //let input = item.querySelector('input');
    let customInput = item.querySelector('span');
    label.addEventListener('click', function() {
        customInput.classList.toggle('checked');
    })
})

$(function () {
    $('.burger').click(function () {
        $('.header_mob').toggleClass('active');
        $('.burger').toggleClass('active');
    })
});

/*$(".trigger").each(function() {
    
    let hiddenGroup = $(this).siblings('.group');

    if(hiddenGroup.css("display", "none")) {
        $(this).on("click", function() {
            hiddenGroup.fadeIn();
        })
    }
    if(hiddenGroup.css("display", "block")) {
        $(this).on("click", function() {
            hiddenGroup.fadeOut();
        })
    }

});*/

/*let filter = document.querySelectorAll('.filter');
filter.forEach(item => {
    let openBtn = item.querySelector('.trigger');
    let hiddenBlock = item.querySelector('.group');
    openBtn.addEventListener('click', function() {
        hiddenBlock.classList.toggle('active');
        if(hiddenBlock.classList.contains('active')) {
            $('.group.active').animate({height:'100%'}, 500);
        } else {
            $('.group.active').animate({height:'0'}, 500);
        }
    })
})*/

if ($(window).width() <= '800') {
    $('.catalog-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}