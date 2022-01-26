var title = "Welcome to my Website";
var i = 0;
var run ;

function runningTitle(){
    var tmp = title.substring(i,title.length)
    document.getElementById("display").innerHTML=tmp;
    i++;
    if(i > title.length){
        i=0;
    }
}
runningTitle();
function controlRunningTitle(val){
    if(val == 1 ){
        run = setInterval(function() { runningTitle();},100); 
    }
    else{
        clearInterval(run);
    }
}




