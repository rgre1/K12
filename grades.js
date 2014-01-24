// If grade is under 20, leave as is, this was done on purpose for days away and taks. It checks every span for a number.
// If grade is under 80, change between 80 and 98.
$("span").html(function(i,html){
    if(!isNaN(html) && html > 0 && html > 21 &&  html < 80){
        var value = (Math.random() * (98 - 80) + 80) + "";
        var length = (value > 100) ? 6:5;
        return value.substring(0,length);
    }
});
