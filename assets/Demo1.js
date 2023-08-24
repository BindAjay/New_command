var list_pro = document.querySelectorAll('.pd-li');
var vie = document.querySelectorAll(".view_details1");
var prtitl = document.querySelectorAll('.card_tt');
list_pro.forEach((libtn)=>{
    i=0;
    libtn.addEventListener('mouseover',()=>{
        vie.forEach((viw_btn1) =>{
            viw_btn1.style.display="none";
          });
          prtitl.forEach((protitl) =>{
            protitl.style.color="#000";
          })
        libtn.querySelector('.view_details1').style.display="block";
        libtn.querySelector('.card_tt').style.color="red";
    })
})