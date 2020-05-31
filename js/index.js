new fullpage("#fullPage", {
    autoScrolling: true,
    navigation: true,
    anchors: ['Home', 'History', 'Departments', 'Tour', 'Members'],
    navigationTooltips: ['Home', 'History', 'Departments', 'Tour', 'Members'],
    scrollingSpeed: 1000,
    controlArrows: false,
    slidesNavigation: true,
    dragAndMove: true,
});

var section = $('li');

function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
}

section.on('click', toggleAccordion);