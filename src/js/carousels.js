const Flickity = require('flickity');
//const utils = require('fizzy-ui-utils');


document.addEventListener('DOMContentLoaded',function() {
    
    window.benefitsCarousel = function() {
        
        const benefits = document.getElementById('benefits');

        const benefitsflkty = new Flickity( benefits, {
            watchCSS: true,
            pageDots: false
        });        
    };

    window.instaCarousel = function() {
        
        const insta = document.getElementById('insta');

        const instaflkty = new Flickity( insta, {
            wrapAround: true,
            freeScroll: true,
            pageDots: false,
            prevNextButtons: false,
        });
    };



}, false)