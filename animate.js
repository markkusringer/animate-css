/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@welvisolutions.com
@organization:  Welvi Solutions
@since:         March 2016
-----------------------------------------------------------------------------*/

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            var self = $(this);
            setTimeout(function(){self.animateCss(animationName);},25);
        });
    }
});
/*$('section img').hover(function() {
    $(this).animateCss('zoomOut');
});*/
var animation = 'slideOutRight';
setTimeout(function(){
    $('section img.cloud1').animateCss('slideOutLargeRight');
},50);
setTimeout(function(){
    $('section img.cloud2').animateCss('slideOutLargeRight');
},500);
setTimeout(function(){
    $('section img.cloud3').animateCss(animation);
},6000);
setTimeout(function(){
    $('section img.cloud4').animateCss(animation);
},1000);
setTimeout(function(){
    $('section img.cloud5').animateCss(animation);
},9000);
setTimeout(function(){
    $('section img.cloud6').animateCss(animation);
},12000);
setTimeout(function(){
    $('section img.cloud7').animateCss('slideOutLargeRight');
},2000);
setTimeout(function(){
    $('section img.cloud8').animateCss('slideOutLargeRight');
},3000);
setTimeout(function(){
    $('section img.mountains').animateCss(animation);
},5000);
$('section img.plane').animateCss('planeMove');
