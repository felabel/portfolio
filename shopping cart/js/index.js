
// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready)
// }else{
//     ready()
// }
// function ready(){
//     var addToCartButtons = document.getElementsByClassName('addtocart')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i];
//         button.addEventListener('click', addtocartClicked)
        
//     }
// }

// function addtocartClicked(event){
//     var button = event.target
//     var shopItem =button.parentElement.parentElement;
//     var title = shopItem.getElementsByClassName('names')[0].innerHTML;
//     var price = shopItem.getElementsByClassName('price')[0].innerHTML;
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
//     console.log(title, price, imageSrc);
//     addItemToCart(title, price, imageSrc);
// }

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div') 
//     cartRow.innerHTML = title;
//     var cartItem = document.getElementsByClassName('cart-items')[0]
//    cartItem.append(cartRow)
//     console.log(cartItem)
// }