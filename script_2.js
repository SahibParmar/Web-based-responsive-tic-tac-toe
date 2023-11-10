var bgMusic = document.getElementById("bg-music");


var p=0;
function Play_music()
{
    bgMusic.play();
    p=1;
    var ele=document.getElementById("gameContainer");
    ele.style.display="flex";
var play_game=document.getElementById("Play");
    play_game.style.display="none";
}



function turn(t){
    const ele=document.getElementById("turn_info");
    
    if(t=="X")
    {ele.innerText="Turn for 0";
    return "0";}

    else
    {ele.innerText="Turn for X";
    return "X";}

}


var t="X"; var w=0;
function tick(box_id){

   const ele=document.getElementById(box_id);
    if(ele.innerText!="X" && ele.innerText!="0" && w==0&&p==1)    
    {
        ele.innerText=t;
        if(isWin()== true)
        {
            // alert(t+" won");
            var ele2=document.getElementById("turn_info");
            ele2.innerText=t+" won"+"\nContinue 👇";
            w=1;
            var ele3=document.getElementById("finish_image");
            ele3.style.display="block";
        }         
        else
        t=turn(t);
    }
    else if(p==0)
    {
        alert("Click on play !");
    }
    else if(w==1)
    {
         alert("Please reset the game...");
    }
    else
    alert("No cheating!!!");
}


function isWin(){
    arr=new Array(9);
    for(let i=0;i<9;i++)
    {
        arr[i]=document.getElementById("box"+(i+1)).innerText; 
    }

    for(let i=0;i<3;i++)
    {
        if(arr[i]===arr[i+3] &&arr[i]===arr[i+6] && (arr[i+3]==="X" || arr[i+3]==="0"))
        {
        // alert("column "+(i+1));
        return true;
        }
    }
    for(let i=0;i<=6;i=i+3)
    {
        if(arr[i]===arr[i+1] && arr[i]===arr[i+2] && (arr[i+1]==="X" || arr[i+1]==="0"))
        {
        // alert("row starting from"+(i+1));
        return true;
        }
    }
    if(arr[0]===arr[4] && arr[4]===arr[8] && (arr[4]==="X" || arr[4]==="0"))
    {
        // alert("left to right");
    return true;
    }

    if(arr[2]===arr[4] && arr[4]===arr[6] && (arr[4]==="X" || arr[4]==="0"))
    {
        // alert("left to right");
    return true;
    }

    else
    return false;
}




function Clear(){
    for(let i=1;i<=9;i++)
    {
        var ele=document.getElementById("box"+(i));
        ele.innerText="";
        ele.innerHTML="&nbsp;";
    }
    t="X";
    w=0;
    var e=document.getElementById("turn_info");
    e.innerHTML="Turn for X";
    var e2=document.getElementById("finish_image");
    e2.style.display="none";
}