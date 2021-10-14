const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let windowPosition = scrollY>0;
    header.classList.toggle('scrolling-active', windowPosition);
})

$(document).ready(function(){
    var wow = new WOW(
        {
          boxClass:     'wow',     
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,       
          live:         true,       
          callback:     function(box) {
            
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    // load more
    $(".s2-item").slice(0,2).show()
    $(".btn-loading").on("click", function(){
        $(".s2-item:hidden").slice(0,2).slideDown()
        if($(".s2-item:hidden").length==0){
            $(".btn-loading").fadeOut('slow')
        }
        
    })
   
});

