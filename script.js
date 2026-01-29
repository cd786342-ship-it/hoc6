function login(){
  const n=document.getElementById("name").value||"Học sinh";
  localStorage.setItem("name",n);
  updateLeader();
}

function updateLeader(){
  const ul=document.getElementById("leader");
  if(!ul) return;
  let total=0;
  ["toan","van","anh","tin"].forEach(s=>{
    total+=parseInt(localStorage.getItem("score_"+s)||0);
  });
  ul.innerHTML="<li>"+(localStorage.getItem("name")||"Học sinh")+" : "+total+" điểm</li>";
}

function toggleTheme(){
  document.documentElement.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded",updateLeader);
