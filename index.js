let ratedNum;

$("div.col").on("click", function(event) {
    ratedNum = 0;

    // for(let i=0; i< $("div.col").length; i++)
    $("div.col").css("background-color", "hsl(213, 19%, 18%)");
    $("div.col").css("color", "hsl(217, 12%, 63%)");
    event.target.style.color = "white";
    event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
    ratedNum = event.target.textContent;
})

$("button").on("click", function() {
    $("#rating").toggleClass("display");
    $("#thanks").toggleClass("display");
    $("#ratedNumber").text(`You selected ${ratedNum} out of 5.`)
});
