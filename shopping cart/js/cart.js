if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
function ready(){
    var removeCartItemButtons =document.getElementsByClassName('btn-danger')
    for(var i =0; i<removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', remove);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
        
    } 
    var addToCartButtons = document.getElementsByClassName('addtocart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addtocartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseMade)
}

function purchaseMade(){
    alert('thank you for your purchase');
    var Items = document.getElementsByClassName('cart-items')[0]
    while (Items.hasChildNodes()){
        Items.removeChild(Items.firstChild)
    }
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
       input.value =1; 
    }
    updateCartTotal()
}
function addtocartClicked(event){
    var button = event.target
    var shopItem =button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('names')[0].innerHTML;
    var price = shopItem.getElementsByClassName('price')[0].innerHTML;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div') 
    cartRow.classList.add('cart-row')
    var cartItem = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItem.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title){
          alert('This Item Is Already Added To Cart')
          return;
        }        
    }
    var cartRowContent = `
    <div class="cart-item cart-column">
                    <img src="${imageSrc}" alt="" class="cart-item-image" width="100" height="100">
                    <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input type="number" name="" id=""value="1" class="cart-quantity-input" ><button class="btn-danger">REMOVE</button>
                </div>`
cartRow.innerHTML = cartRowContent;
   cartItem.append(cartRow)
   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', remove)
   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click', quantityChanged)
}
 
function remove(event){
    var buttonClicked = event.target ;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items');
    for (let k = 0; k < cartItemContainer.length; k++) {
        const element1 = cartItemContainer[k];
       var cartRows= element1.getElementsByClassName('cart-row')
     total = 0;
    for(var i =0; i<cartRows.length; i++){
        var cartRow =cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price');
        for (let i = 0; i < priceElement.length; i++) {
            const element = priceElement[i];
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
            // test
            for (let i = 0; i < quantityElement.length; i++) {
                var element2 = quantityElement[i];
               
                // copied code
                var price = parseFloat(element.innerHTML.replace('$', ''));
                // var price = (priceElement.innerHTML)
                var quantity = element2.value;
                 total = total + (price * quantity )
            // }
        //    end 
               
            }
        }
        } 
    }
    var totalPrice = document.querySelector('.cart-total-price');
    total = Math.round(total * 100) / 100;
    totalPrice.innerHTML = '$'+ total;
}

function show(){
    if(document.getElementById('cartdiv').style.display == 'none'){
        document.getElementById('cartdiv').style.display = 'block';
    }else{
        document.getElementById('cartdiv').style.display = 'none';
    }
    
}

