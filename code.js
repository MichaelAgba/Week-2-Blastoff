function countdownTimer(){
    console.log("countDownTimer() started");
    var currTime =50;
    document.getElementById("BlastOffText").innerHTML=currTime;
    currTime = currTime - 5;
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("45");
currTime=currTime - 5;
}, 5000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("40");
currTime=currTime - 5;
}, 10000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("35");
currTime=currTime - 5;
}, 15000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("30");
currTime=currTime - 5;
}, 20000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("25");
currTime=currTime - 5;
}, 25000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("20");
currTime=currTime - 5;
}, 30000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("15");
currTime=currTime - 5;
}, 35000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("10");
currTime=currTime - 5;
}, 40000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML=currTime;
console.log("5");
currTime=currTime - 5;
}, 45000);
setTimeout(function(){
document.getElementById("BlastOffText").innerHTML="BlastOff!!";
console.log("BlastOff!!");
currTime=currTime - 5;
}, 50000);

}