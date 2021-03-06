const { detect } = require('detect-browser');
const browser = detect();

document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 250);

        
        // Anims on inview
        window.animsInit();  
        
        
        // Carousels 
        document.getElementById('benefits') ? window.benefitsCarousel() : false;
        document.getElementById('insta') ? window.instaCarousel() : false;
        
        // Parallax 
        document.getElementsByClassName('js-rellax').length > 0 ? window.parallax() : false;
    };
    
    
    window.addEventListener('load', init);

}, false);