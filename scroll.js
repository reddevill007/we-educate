/*================ SCROLL REVEAL ANIMATION ================*/
const sr = ScrollReveal({
    distance: '200px',
    duration: 2800,
})

sr.reveal(`.hero-content, .hero-img, .review-box, .reveal, .about-img, .event-details, .stat-box, .post, .course-container`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.foot, .about-det, .timing, .benifit-img, .contact-details`, {
    origin: 'left',
})

sr.reveal(`.ft-box, .copyright, .event-img, .benifit-content, .map, .scrollReveal`, {
    origin: 'right',
})