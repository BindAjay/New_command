//View Details button desgin
var list_pro = document.querySelectorAll(".pd-li");
var vie = document.querySelectorAll(".view_details1");
var prtitl = document.querySelectorAll('.card_tt');

list_pro.forEach((libtn)=>{
      // var col_libtn = libtn.querySelector(".color-img");
      // col_libtn.addEventListener('mouseover',()=>{
    libtn.addEventListener('mouseover',()=>{
    // console.log("list_product",libtn.querySelector(".color-img"));
     //console.log(col_libtn);

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

// open popup on click on View Button and show product with the help of CLI
var view_btn = document.querySelectorAll(".view_details1");
var pro_url="";
view_btn.forEach((v_btn) =>{
  v_btn.addEventListener("click",() =>{
     pro_hand = v_btn.getAttribute("hand");
     pro_url = v_btn.getAttribute("at");
     pro_id = v_btn.getAttribute("id");
     //console.log(inn);
     urr1 = "http://"+inn+pro_url+"/?section_id=template--20576124404004__main";
     fetch(urr1)
     .then(response =>{
       return response.text();
     }).then((data) =>{
      document.querySelector(".quick-box").style.display="block";
      document.querySelector(".quick-text-box").innerHTML = data;
     })
  })
})
// close popup on click on View Button and show product with the help of CLI 

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
// })d

// view click button 

// Open variant Color  in collection cart 
var color_btn = document.querySelectorAll(".color-box1");
color_btn.forEach((color_va) =>{
  color_va.addEventListener('click',() =>{  
    color_txt = color_va.getAttribute("id");
    clos = color_va.closest(".card-color-code");
    console.log(clos.querySelector(".color-img img"));
    clos.querySelector(".color-img img").srcset=color_txt;
    clos.querySelector(".color-img img").src=color_txt;
    //console.log(clos.querySelector(".color-img img").src=color_txt);
  })
})
//End variant Color in collection cart


// var img12 = document.querySelectorAll(".color-img img");
// img12.forEach((imgurl) =>{
//   // console.log(imgurl);
// })

// var col_list_pro = document.querySelectorAll(".pd-li .card-color-code .card__inner");
// col_list_pro.forEach((color_list_m) =>{
//   color_list_m.addEventListener('mouseover',()=>{
//    // alert();
//   })
// })