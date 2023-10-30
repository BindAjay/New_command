// {%- assign pin_code = section.settings.pincode_n -%}

var pin = {{pin_code | json}};
console.log(pin);


// document.addEventListener("DOMContentLoaded", (event) => {
// var loading1 = document.querySelectorAll('.placeholder-img');
//   loading1.forEach((load_btn1)=>{
//     console.log("loader",load_btn1);
//     load_btn1.classList.remove("loding-show");
//   });
// });
window.addEventListener("load", (event) => {
 var loading1 = document.querySelectorAll('.placeholder-img');
  loading1.forEach((load_btn1)=>{
    console.log("loader",load_btn1);
    load_btn1.classList.remove("loding-show");
    setTimeout(function(){
      load_btn1.classList.add("loding-show");
     },500);
  })
});

//classList.add("my-class")
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
//open collection cart 

var coll_btn = document.querySelectorAll('.card-box-12');
coll_btn.forEach((crt_btn)=>{
  crt_btn.addEventListener('mouseover',()=>{
    vie.forEach((viw_btn1) =>{
      viw_btn1.style.display="none";
    }); 
  crt_btn.querySelector('.view_details1').style.display="block";
  })
})

coll_btn.forEach((crt_btn)=>{
  crt_btn.addEventListener('mouseout',()=>{
    // vie.forEach((viw_btn1) =>{
    //   viw_btn1.style.display="none";
    // }); 
  crt_btn.querySelector('.view_details1').style.display="none";
  })
})
// close collection cart
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
     console.log('1....',"http://"+inn+pro_url+"/?section_id=template--21223264092452__main");
     urr1 = "http://"+inn+pro_url+"/?section_id=template--21223264092452__main";
     fetch(urr1)
     .then(response =>{
       return response.text();
     }).then((data) =>{
      document.querySelector(".quick-box").style.display="block";
      document.querySelector(".quick-text-box").innerHTML = data;
      console.log("Data",data);
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

// window.onload = (event) => {
//   console.log(window.location);
// };

// console.log("Find Script",document.scripts);
//console.log(document.images);

// NEWF = () =>{
//   console.log("new Functoion");
// }
// i =1;
// run = () =>{
//  i++;
//  console.log("Run Infinite Time",i);
// }

// cls = setInterval(run,2000);

//Open Back History API 
var pod_tit = document.querySelector('.MY-BRAND');
//console.log("Product title",pod_tit);
pod_tit.addEventListener('click',()=>{
  window.history.back();
  url = window.navigator.language;
console.log(url);
})
// Close Back History API 

// open go History API
// var pod_tit = document.querySelector('.MY-BRAND');
// console.log("Product title",pod_tit);
// pod_tit.addEventListener('click',()=>{
//  window.history.go(-2);
// })
// Close go History API

var nav_cook = navigator.cookieEnabled
console.log(nav_cook);
if (!navigator.cookieEnabled){
  console.log("Hello");
}
else{
  console.log("Hey");
}

// localStorage.setItem('Massage',"LocalStorage");
// localStorage.setItem("mytime", Date.now());
// localStorage.setItem("Name","OnsideShe");
// var inp = document.querySelector('.Strinp');
// var p = document.querySelector(".stor-vl");
// inp.addEventListener('keyup',()=>{
//    localStorage.setItem('value',inp.value);
//    localStorage.removeItem("Massage");
//    console.log(localStorage.key(7));
//    console.log(localStorage.length);
//    document.querySelector('.stor-vl').innerHTML=localStorage.getItem("value");
//  // p.innerHTML=localStorage
// })


// Open Add to cart button 
var Adt_btn = document.querySelector('.Second-button');
Adt_btn.addEventListener('click',()=>{
   id12 = document.querySelector('.pd-id').getAttribute("id");
   qut = document.querySelector('.quantity__input').value;
  console.log(`id ${id12} Quntity ${qut}`)
   var data = [];
   data.push({
    'id':id12,
    'quantity':qut
   });
   let formData = {
    'items':data,
    sections:'card-drawer'
   };
   fetch('/cart/add.js',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
   }).then((response)=>{
    return response.json();
   })
  //  .then((finall) =>{
  //   console.log(finall);
  // })
  .catch(error => {
    console.error("ERROR :",error);
  });
})
//Close Add To cart button
 








