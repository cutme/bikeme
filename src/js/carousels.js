const Flickity = require('flickity');
//const utils = require('fizzy-ui-utils');


document.addEventListener('DOMContentLoaded',function() {

    window.instaCarousel = function() {
        
        const insta = document.getElementById('insta');

        const instaflkty = new Flickity( insta, {
            wrapAround: true,
            freeScroll: true,
            freeScrollFriction: 0.03,
        });
    };



}, false)