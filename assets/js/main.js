var swiper = new Swiper('.home--slide', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('.recommendation--slide2', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$("#add-another-flight").on("click", (e) => {
    e.preventDefault()
    const newFlight = $(".flight-info")
        .first()
        .clone()
    newFlight.insertBefore("#another-flight-container")
    newFlight.find(".dropdown-toggle").remove()
    newFlight.find(".dropdown-menu").remove()
    newFlight.find(".selectpicker").selectpicker("render")
    newFlight.find(".btn.remove-flight").on("click", (e) => {
        e.preventDefault()
        newFlight.remove()
    })
})


