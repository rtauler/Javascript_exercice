$(document).ready(function(){

    // START FADE IN/OUT HOVER + CORRECIÓN BUG MOBILE->DESKTOP
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
        $('.current-menu-item').removeClass('current-menu-item')
        // $("a").parent().removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
    });
    // END CURRENT MENU KEEPER

    function toggleElements() {
        $("#mobile-button").toggle();
        $("#mobile-close").toggle();
        $('#menu-container').toggle();
    }

    //START MENU TO CLOSE TO MENU
    $("#mobile-button").click(toggleElements);
    $("#mobile-close").click(toggleElements);
    //END MENU TO CLOSE TO MENU

    //START HIDE CLOSE BUTTON AFTER MOBILE->DESKTOP
    $(window).resize(function(){  
        if ($(window).width() > 990){  
            $("#mobile-button, #mobile-close").css('display', 'none');

        } 
        if ($(window).width() < 990){
            if ($("#menu-container").css('display') ==='none') {
                $("#mobile-button").css('display', 'block');
            }
            if ($("#menu-container").css('display') ==='block') {
                $("#mobile-close").css('display', 'block');   
            }
        }
    });
    //END HIDE CLOSE BUTTON AFTER MOBILE->DESKTOP
});