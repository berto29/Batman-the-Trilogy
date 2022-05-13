$(".roof").hide();
$(".alley").hide();
$(".car").hide();
$(".end").hide();
$(".L").hide();
$(".ok").hide();
$(".nah").hide();
$(".dead").hide();
$(".ugly").hide();
$(".Left").hide();
$(".Right").hide();
$(".almost").hide();
$(".continue").hide();

$(".No").click(function(){
    $(".L").show();
    $(".roof").hide();
    $(".alley").hide();
    $(".car").hide();
    $(".end").hide();
    $(".batman").hide();
    $(".head").hide();
    $(".bottom").text("Leave it to Robin then ig kinda lame tho...");
    $(".Yes").hide();
    $(".No").hide();

});

$(".Yes").click(function(){
    $(".roof").show();
    $(".head").hide();
    $(".batman").hide();
    $(".Yes").hide();
    $(".No").hide();
    $(".bottom").text("Mr. Freeze is out for Gotham once again, freezing everyone in his path, and we need your help to stop him!");
    $(".ok").show();
    $(".nah").show();
    });


$(".nah").click(function(){
    $(".L").show();
    $(".roof").hide();
    $(".alley").hide();
    $(".car").hide();
    $(".end").hide();
    $(".batman").hide();
    $(".head").show();
    $(".head").text("Mr. Freeze wreaks havoc upon Gotham...");
    $(".bottom").text("Leave it to Robin then ig kinda lame tho...");
    $(".Yes").hide();
    $(".No").hide();
    $(".ok").hide();
    $(".nah").hide();

});


$(".ok").click(function(){
    $(".car").show();
    $(".ok").hide();
    $(".nah").hide();
    $(".roof").hide();
    $(".bottom").text("hover over the batmobile get in it");
    
});

$(".car").hover(function(){
    $(".car").hide();
    $(".alley").show();
    $(".bottom").text(" double click the the alley to find Mr. Freeze's hide out");
                    
});


$(".alley").dblclick(function(){
    $(".alley").hide();
    $(".ugly").show();
    $(".head").show();
    $(".head").text("You find Mr. Freeze He's ready to fight...");
    $(".bottom").text("Don't FREEZE up now ");
    $(".Left").show();
    $(".Right").show();
    
});

$(".Left").click(function(){
    $(".dead").show();
    $(".ugly").hide();
    $(".head").text("He's ready for that, he's studied your fight patterns ");
    $(".bottom").text("FREEZE in hell Batman");
    $(".Left").hide();
    $(".Right").hide();
});

$(".Right").click(function(){
    $(".almost").show();
    $(".ugly").hide();
    $(".head").hide();
    $(".bottom").text("You catch him off guard but..");
    $(".Left").hide();
    $(".Right").hide();
    $(".continue").show();
});


$(".continue").click(function(){
    $(".almost").hide();
    $(".end").show();
    $(".head").show();
    $(".head").text("It was all a trap, a scheme he plotted to capture you!");
    $(".bottom").html("<a href='https://popcode.org/?snapshot=130de3e1-dfda-4951-a70f-68a5f29aeaf1'>TO BE CONTINUED...</a>");
    $(".continue").hide();
    

});