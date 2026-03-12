let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){

let container = document.getElementById("cart-items");
container.innerHTML="";

let subtotal=0;

cart.forEach((item,index)=>{

let total=item.price*item.qty;
subtotal+=total;

container.innerHTML+=`

<div class="cart-item">

<div class="item-info">
<img src="${item.image}">
<span>${item.name}</span>
</div>

<div>$${item.price}</div>

<div class="quantity">
<button onclick="changeQty(${index},-1)">-</button>
${item.qty}
<button onclick="changeQty(${index},1)">+</button>
</div>

<div>$${total.toFixed(2)}</div>

</div>

`;

});

let tax=subtotal*0.10;
let grand=subtotal+tax;

document.getElementById("subtotal").innerText="$"+subtotal.toFixed(2);
document.getElementById("tax").innerText="$"+tax.toFixed(2);
document.getElementById("total").innerText="$"+grand.toFixed(2);

}

function changeQty(index,amount){

cart[index].qty+=amount;

if(cart[index].qty<=0){
cart.splice(index,1);
}

localStorage.setItem("cart",JSON.stringify(cart));

renderCart();
}

renderCart();