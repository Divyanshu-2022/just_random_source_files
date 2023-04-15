function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// window.onclick.getElementById('pop').style.display=none;
// window.onload.getElementById('pop').style.display=block;
  function closePop() {
      document.getElementById("pop").style.display=none;
  }
  function openPop(){
      document.getElementById('pop').style.display="block";
}  
// setTimeout({
//       window.onload.document.getElementById('pop')=style.display="block"
// },6000)
window.onclose.document.getElementById('pop').style.display('')
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const phone=document.getElementById('phone').value;
// const text=document.getElementById('textarea').value;

const submit=document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
})