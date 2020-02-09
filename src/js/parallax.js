import Rellax from 'rellax';

document.addEventListener('DOMContentLoaded',function() {

    window.parallax = function() {
        const rellax = new Rellax('.js-rellax', {
             center: true,
        });
    };

    
}, false);
