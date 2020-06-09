$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'A Front-end Web Developer',
        'Vested In STEM '
        
    ],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        ' I know python, html,css and some javascript',
        'I create responsive websites with bootsrap',
        ' I can build your website!',   
        ' I build and support start-ups',
        'I am with the  Uz pharmacy school',
        'I like to play with mortar and pestle,sometimes a pipette,sometimes a keyboard and a mouse.yes i am a little bit busy but i can play with you too ,lol!',                 
        'I am a scientist'
        

    ],
    typeSpeed: 30,
    backSpeed: 10,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
