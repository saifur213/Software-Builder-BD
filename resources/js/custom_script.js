$(document).ready(function(){
    
   $(".js--service-section").waypoint(function(direction){
       if(direction=="down"){
           $("nav").addClass("sticky");
       }
       else{
           $("nav").removeClass("sticky");
       }
   });
    
    // MIXITUP (PORTFOLIO SECTION)
    var mix = mixitup(".container");
    
    $("#openbtn").click(function(){
        
        $("#showOverlay").css({"width":"100%"});
    });
     $("#closebtn").click(function(){
        
        $("#showOverlay").css({"width":"0"});
    });
    
});

function hideMenu(){
    document.getElementById("showOverlay").style.width="0";
}