const colorbtn=document.querySelector('.colorbtn');
const bodybg=document.querySelector('body');

const colors=['#B1BCE6','#68A7AD','#FEE2C5','#00FFC6','#9CB4CC','#937DC2','#96BAFF','#F2FFDF'];

colorbtn.addEventListener('click',changeColor);

function changeColor(){
  let random =Math.floor(Math.random()*colors.length)
  bodybg.style.backgroundColor=colors[random];
}
