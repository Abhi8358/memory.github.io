var nextarr=[];
var userarr=[];
var level=0;
var started=false;
const buttoncolor=["red","blue","yellow","green"];


    

$(document).keypress(function(){
    if(!started){
        started=true;
        $('#title').text("level"+level);
        nextsequence();
    }
});

$(".btn").click(function(){
    var userchossencolor=$(this).attr("id");  // attr in jquery used to return the attribute of set the attribute and value
    userarr.push(userchossencolor);
    playsound(userchossencolor);
    animate(userchossencolor);
    
    validateans(userarr.length-1);
});

function validateans(len){
    if(nextarr[len]===userarr[len]){
        if(nextarr.length==userarr.length){
            setTimeout(function(){
                nextsequence();
            },1000);
            
        }
    }
    else{
        playsound("sounds/wrong.mp3");

        
        $("body").addClass("gameover");
        
        setTimeout(function(){
            $("body").removeClass("gameover");
        },200);
        $("#title").text("Press Any Key to Start");
        startOver();
    }
}

function nextsequence(){
    level++;
    
    $("#title").text("level "+level);
    
    userarr=[];
    
    var randomnnumber=Math.floor(Math.random()*3);
    var color= buttoncolor[randomnnumber];
    nextarr.push(color);
    $("#"+color).fadeIn().fadeOut().fadeIn();
    playsound(color);
    animate(color);
    
}
function playsound(key){
    
    var audio=new Audio("sounds/"+key+".mp3");
    audio.play();
}
function animate(key){
    $("#"+key).addClass("pressed");
    setTimeout(function(){
        $("#"+key).removeClass("pressed")
    },100);
}

function startOver(){
    userarr=[];
    nextarr=[];
    level=0;
    started=false;   
}