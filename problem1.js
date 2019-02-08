
//ALERT FUNCTION
$("#myElement").addClass("blue").on('click',function(){
    alert("myElement was clicked!")
});

// SELECTORS WITH CLASS
$("#myElement div:nth-child(1)").addClass("s0");
$("#myElement div:nth-child(2)").addClass("s1");

// REDSTUFF
$("div:first").addClass("blood");
$("div:last").addClass("blood");
$("body:nth-child(2)").addClass("blood");