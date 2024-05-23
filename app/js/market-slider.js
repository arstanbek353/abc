export default function () {
  const sectionNodes = document.querySelectorAll('.market-slider')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.market-slider__slider')
    const pagNode = element.querySelector('.market-slider__pag')
    const prevNode = element.querySelector('.market-slider__prev')
    const nextNode = element.querySelector('.market-slider__next')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: 4,
      // autoplay: {
      //   delay: delay,
      // },
      pagination: {
        el: pagNode,
        type: "fraction",
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' / ' +
                   '<span class="' + totalClass + '"></span>';
        }
      },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}