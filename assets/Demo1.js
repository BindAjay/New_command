// View Details button
var list_pro = document.querySelectorAll(".pd-li");
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
        // libtn.querySelector('.full-unstyled-link').style.text-decoration= "none";
    });
})

list_pro.forEach((listbt) =>{
   listbt.addEventListener('mouseout',()=>{
    prtitl.forEach((protitl) =>{
      protitl.style.color="#000";
    })
       listbt.querySelector('.view_details1').style.display="none";
       listbt.querySelector('.card_tt').style.color="#000";
   })
})

//Header popular Serach bar ...
inn=window.location.host;
ut="http://"+inn+"/search?q=";
var bard_list = document.querySelectorAll(".Popular1 li");
bard_list.forEach((nam) =>{
  nam.addEventListener('click',()=>{
    tttval = nam.innerHTML;
     serurl = tttval.replace(" ", "+");  
      window.location.href= ut+tttval;
  });
})

var view_btn = document.querySelectorAll(".view_details1");

view_btn.forEach((v_btn) =>{
  i=0;
  v_btn.addEventListener("click",() =>{
    i++;
     console.log(i);
     document.querySelector(".quick-box").style.display="block";
  })
})
