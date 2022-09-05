let a_price=document.getElementById("a_price");
let s_price=document.getElementById("s_price");

fun=()=>{
    let e_price=document.getElementById("e_price").value;
let d_price=document.getElementById("d_price").value;
    let y = e_price*d_price/100;
    let x = e_price-y;
a_price.innerHTML = x;
s_price.innerHTML = y;

}
fun1=()=>{
   document.getElementById("e_price").value=0;
   document.getElementById("d_price").value=0;
   document.getElementById("a_price").innerHTML=0;
   document.getElementById("s_price").innerHTML=0;   
    

}