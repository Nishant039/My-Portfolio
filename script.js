(function(){
    
    var header = document.getElementById("header");
    var navToggle = document.getElementById("nav-toggle");
    var goUpButton = document.getElementById("go-up");
//    var introSection = document.getElementById("intro");
//    var aboutMeSection = document.getElementById("about-me");
//    var historySection = document.getElementById("history");
//    var portfolioSection = document.getElementById("portfolio");
//    var byNumbersSection = document.getElementById("by-numbers");
//    var testimonialsSection = document.getElementById("testimonials");
//    var blogSection = document.getElementById("blog");
//    var getInTouchSection = document.getElementById("get-in-touch");
//    var contactSection = document.getElementById("contact");
//    var footerSection = document.getElementById("footer");
//    
//    
//    var aboutMeOffset = aboutMeSection.offsetTop;
//    var historyOffset = historySection.offsetTop;
//    var portfolioOffset = portfolioSection.offsetTop;
//    var byNumbersOffset = byNumbersSection.offsetTop;
//    var testimonialsOffset = testimonialsSection.offsetTop;
//    var blogOffset = blogSection.offsetTop;
//    var getInTouchOffset = getInTouchSection.offsetTop;
//    var contactOffset = contactSection.offsetTop;
//    var footerOffset = footerSection.offsetTop;
//    
    
    
    navToggle.addEventListener("click", function(){
        toggleClass(header, "toggled");
    })
    
    window.addEventListener("scroll", function(e){
        var yOfsset = window.pageYOffset;
        
//        if(yOfsset > 10){
//            addClass(introSection, "show");
//        }
//        if(yOfsset > aboutMeOffset - 400){
//            addClass(aboutMeSection, "show");
//        }
//        if(yOfsset > historyOffset - 400){
//            addClass(historySection, "show");
//        }
//        if(yOfsset > portfolioOffset - 400){
//            addClass(portfolioSection, "show");
//        }
//        if(yOfsset > byNumbersOffset - 400){
//            addClass(byNumbersSection, "show");
//        }
//        if(yOfsset > testimonialsOffset - 400){
//            addClass(testimonialsSection, "show");
//        }
//        
//        if(yOfsset > blogOffset - 400){
//            addClass(blogSection, "show");
//        }
//        if(yOfsset > getInTouchOffset - 400){
//            addClass(getInTouchSection, "show");
//        }
//        if(yOfsset > contactOffset - 400){
//            addClass(contactSection, "show");
//        }
//        if(yOfsset > footerOffset - 400){
//            addClass(footerSection, "show");
//        }
        if(yOfsset > 150){
            addClass(header, "open");
        }else{
            removeClass(header, "open");
        }
        if(yOfsset > 250){
            addClass(goUpButton, "show");
        }else{
            removeClass(goUpButton, "show");
        }
    })
    function toggleClass(element, className){
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1){
            addClass(element, className);
        }else{
            removeClass(element, className);
        }
    }
    function addClass(element, className){
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1){
            classList.push(className);
            classList = classList.join(" ");
            element.className = classList;
        }
    }
    function removeClass(element, className){
        var classList = element.className.split(" ");
        if (classList.indexOf(className) !== -1){
            classList = classList.filter(function(e){
                return e !== className
            })
            element.className = classList;
        }
    }
})();