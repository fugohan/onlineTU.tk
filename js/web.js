function changeDisplayWeb(webpage){
  document.getElementsByName("display")[0].data ="https://"+document.querySelector("#navbarSupportedContent > form > input").value+"&output=embed";

}
function changeDisplay(webpage){
  document.getElementsByName("display")[0].data = webpage;
}

function changeDisplayWebI(webpage){
if (document.querySelector("#navbarSupportedContent > form > input").value == "timer"){
document.querySelector("body > iframe").src  ="https://www.timeme.com/timer.htm?17ps07qpc5d0310501/Lernen"
}
else{
document.querySelector("body > iframe").src  ="https://"+document.querySelector("#navbarSupportedContent > form > input").value//+"&output=embed";
}
}
function changeDisplayWebIa(webpage){

document.querySelector("body > iframe").src  =webpage;//+"&output=embed";

}


