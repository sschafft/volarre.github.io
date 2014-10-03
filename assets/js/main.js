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

// Typeform JS
(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()
