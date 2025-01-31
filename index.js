var btn=document.getElementsByClassName("btn");
for(var i=0;i<btn.length; i++){
   btn[i].onclick=function(){
      animation(this.value);
   }
}

var modeBtn=document.getElementById("modeBtn");
modeBtn.onclick=function(){
   
   mode();
}









function animation(classValue){
   var title=document.getElementById("title");
   title.className=classValue;
   
    
}
function mode(){
   var logo=document.getElementById("logo");
   var btn=document.getElementsByTagName("button");
   var nav=document.getElementById("nav");
   var section=document.getElementById("section");

   var title=document.getElementById("title");
   var disc=document.getElementById("discription");
   // title.style.color="#4672FE";
   // disc.style.color="white";
   // nav.style.backgroundColor="#15151D";
   // section.style.backgroundColor="#111111";
   var toggle=document.getElementById("toggle");
   
  if(disc.style.color=="white"){
   title.style.color="#351C75";
   disc.style.color="#E69138";
   nav.style.backgroundColor="#F7D7B5";
   section.style.backgroundColor="#FCE5CD";
   toggle.className="fa-solid fa-toggle-off";
   nav.style.color="black";
   for(var i=0;i<btn.length;i++){
      btn[i].style.color="black";
   }
   toggle.style.color="#4672FE";
   logo.style.color="black";

  }
  else{
   title.style.color="#4672FE";
   disc.style.color="white";
   nav.style.backgroundColor="#15151D";
   section.style.backgroundColor="#111111";
   toggle.className="fa-solid fa-toggle-on";
   nav.style.color="white";
   list1.style.color="white";
   for(var i=0;i<btn.length;i++){
      btn[i].style.color="#E0E0E0";
   }
   toggle.style.color="#4672FE";
   logo.style.color="white";
   
  }


}