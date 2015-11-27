var menuShown = false;
$(document).ready(function(){
    $("#hamMenu").click(function(){
        if(menuShown){
            $("#mobileHeader").animate({
                opacity: "0",
                height: "0px"
            });
            setTimeout(function(){ $("#mobileHeader").css("display", "none"); }, 350);
        }else{
            $("#mobileHeader").css("display", "block");
            $("#mobileHeader").animate({
                opacity: "1",
                height: "320px"
            });
        }
        menuShown = !menuShown;
    });
    
    $(window).resize(function(){
        if( $("#logo").css('float').toLowerCase() == 'left'){
            $("#mobileHeader").removeAttr("style");
        }   
        
        if( $(".jumbotron").css('display').toLowerCase() == 'block'){  
            $('.textWrap').matchHeight();
        }
    });
    
    if( $(".jumbotron").css('display').toLowerCase() == 'block'){  
        $('.textWrap').matchHeight();
    }

});