$(document).ready(function( $ ){
    
    $.localScroll.defaults.axis = 'y';

    $.localScroll({
        target: 'body',
        queue: true,
        duration:1000,
        hash:false,
        onBefore:function( e, anchor, $target ){
            // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
            // The 'this' contains the scrolled element (#content)
        }
    });

    $.localScroll.hash({
        target: 'body',
        queue:true,
        duration:1500,
    });

});
$(document).ready(function( ){
    $('.slides').superslides({
            play: 4000,
            slide_easing: 'easeInOutCubic',
            slide_speed: 800,
            pagination: true,
            hashchange: false,
            scrollable: true,
            inherit_width_from: '.laptop-screen',
            inherit_height_from: '.laptop-screen',
        });
});

$(document).ready(function( $ ){

    $('li#show-menu').click(function(){
        $('ul#menu, li#show-menu').toggleClass('active')
        return false;
    });
});
