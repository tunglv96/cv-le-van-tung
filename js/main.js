// Javascript
document.addEventListener('DOMContentLoaded',function(){
    var navbar = document.getElementById('navigation');
    var status = 'under 50';

    window.addEventListener('scroll',function(){
        if (window.pageYOffset > 50){
            if (status == 'under 50'){
                status = 'over 50';
                navbar.classList.add('bg');
            }
        }
        else if ( window.pageYOffset <= 50) {
            if ( status == 'over 50'){
                status = 'under 50';
                navbar.classList.remove('bg');
            }
        }
    })
    // end sroll
},false);


// Jquery
$(document).ready(function () {
    //Scroll window
    var $root = $('html');

    $('a[href^="#"]').click(function () {
        $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top,
    }, 400);
    return false;
    })

    // back to top
    $('ul li.nav-item:first-child a').addClass('home');
    
    $('a.home').click(function(e){
        e.preventDefault();
        $('a.home').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({scrollTop: 0},400);
        return false;
    })

    //WOW
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();

    // Skill
    $('.skill-information').slideUp();
    $('._1line').click(function(){
        $(this).children('.skill-information').slideToggle();
    })
});
