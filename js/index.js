(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);


$(function(){
    var btn=$(".nav-content .icon");
    var subNav=$(".nav-content .sub-nav");
    var enableShow=true;
    btn.on("click",function(){
        if(enableShow){
            // subNav.removeClass("back").addClass("active");
            enableShow=false;
            subNav.css({
                "top":".6rem",
                "transition":"top 2s ease-in-out"
            })
        }else{
            enableShow=true;
            subNav.css({
                "top":"-2rem",
                "transition":"top 2s ease-in-out"
            })
            // subNav.removeClass("active").addClass("back");
        }

    })
})