let para=document.getElementById('status');
let enterBtn = document.getElementById('enter-btn');
  enterBtn.addEventListener("click",function(){
   let heading=document.createElement("h1");
   heading.innerText="Entered Metaverse";
   para.innerText="";
   para.appendChild(heading);
  });