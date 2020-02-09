import { TweenLite, ScrollToPlugin } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
//import customSelect from 'custom-select';
//import ScrollToPlugin from 'gsap/ScrollToPlugin';
 
(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	isInView: isInView,
        	scrollTo: scrollTo
        };
    };
   	    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    
    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, .6, {
			scrollTo: {
				y: target - offset,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};

    cutme.Helpers = new Helpers();
    
    
    // Select
    
/*
    (function() {
        
        const select = document.getElementsByTagName('select');
    
        const init = function() {
    
            const cstSel = customSelect(select);
            
            for (let i = 0; i < select.length; i ++) {
                cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                    e.target.style.position = 'relative';
                    e.target.style.zIndex = '5';
                });
                
                cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                    e.target.removeAttribute('style');
                });
            }
        };
                
        select ? init() : false;
        
    })();
*/
    

}(window, document, window.cutme = window.cutme  || {}));