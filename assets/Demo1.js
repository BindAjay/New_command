// View Details button desgin
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
// close view design button
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
// Header popular Serach bar close here //

// View Details button here 
var view_btn = document.querySelectorAll(".view_details1");
var pro_url="";
view_btn.forEach((v_btn) =>{
  v_btn.addEventListener("click",() =>{
     pro_hand = v_btn.getAttribute("hand");
     pro_url = v_btn.getAttribute("at");
     pro_id = v_btn.getAttribute("id");
     //console.log("id"+pro_id);
     //console.log("http://"+inn+pro_url+"json");
     urr1 = "http://"+inn+pro_url+"/?section_id=template--20576124404004__main";
     //console.log(urr1);
     fetch(urr1)
     .then(response =>{
       return response.text();
     }).then((data) =>{
      // prodata = data['template--20576124404004__main-product'];
      console.log('1.',data);
      // console.log('2..',JSON.stringify(data));
      document.querySelector('.demo').innerHTML = data;
     //console.log(data);
     })
     //document.querySelector(".quick-box").style.display="block";
  })
})
// close View Details button here
//Fetch Section API  
// console.log("Fetch Section")
// fetch('http://127.0.0.1:9292/?sections=featured-collection')
// .then(response => {
//   return response.json();
// }).then( (data) =>{
//   console.log(data['featured-collection']);
// })
// close fetch section API

// console.log("Fetch Section Id ");
// fetch('http://127.0.0.1:9292/products/mobile-bag-with-metal-lock-731433207932.json')
// .then(response =>{
//   return response.json();
// }).then((data) =>{
//    console.log(data);
// })

// view click button 

