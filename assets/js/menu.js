var $a = $("ul.sub-menu");

$(document).ready(function(){

    // START ANTI-BUG MOBILE -> DESKTOP
    
    // END ANTI-BUG MOBILE -> DESKTOP

    // START FADE IN/OUT HOVER
    $("li", this).hover(function(){
        $('ul.sub-menu', this).fadeIn();
    },function(){
        var submenu = $('ul.sub-menu', this);
        
        submenu.fadeOut({
            complete: function () {
                submenu.css('display', 'none');
            }
        });
    });
    // END FADE IN/OUT HOVER

    // START CURRENT MENU KEEPER
    $("a", this).click(function(){
        $("a").parent().removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
    });
    // END CURRENT MENU KEEPER

    //START MENU TO CLOSE/CLOSE TO MENU
    $("#mobile-button, #mobile-close").click(function(){
        $("#mobile-button, #mobile-close").toggle();
        $("#menu-container").toggle();
    });
    //END MENU TO CLOSE/CLOSE TO MENU
});