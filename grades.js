// If grade is under 20, leave as is, this was done on purpose for days away and taks. It checks every span for a number.
// If grade is under 70, change between 80 and 95.
$("span").html(function(i,html){
    if(!isNaN(html) && html > 0 && html > 21 &&  html < 71){
        var value = (Math.random() * (95 - 80) + 80) + "";
        var length = (value > 100) ? 6:5;
        return value.substring(0,length);
    }
});
