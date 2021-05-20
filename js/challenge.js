const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const heart=document.getElementById('heart');
const pause=document.getElementById('pause');
const counting=document.getElementById('counter');
plus.addEventListener("click",function(e){
  plus.clickcount = Number(plus.clickcount)+1;
  const counting1=counter.value;
  counting.target.innerHTML=counting1+1;
});
 