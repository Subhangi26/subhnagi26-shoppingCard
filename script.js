if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}
function ready(){
    let removeCartItem = document.getElementsByClassName('btn5');
    for(let i=0;i<removeCartItem.length;i++){
        let button = removeCartItem[i];
        button.addEventListener('click',function(e){
            let buttonClicked = e.target;
            buttonClicked.parentElement.parentElement.parentElement.remove();
            updateCartTotal();
        })
    }
    let addToCart = document.getElementsByClassName('btns')
    for(let i=0;i<addToCart.length;i++){
        let button2 = addToCart[i];
        button2.addEventListener('click',function(e){
            let button3 = e.target
            let shopItem = button3.parentElement.parentElement
            let title = shopItem.getElementsByClassName('card-title')[0].innerText
            let price = shopItem.getElementsByClassName('card-prices')[0].innerText
            addToCartProcess(title,price)
        })
    }
}
function addToCartProcess(title,price){
    let cartRow = document.createElement('div');
    cartRow.innerText = title
    let cartItems = document.getElementsByClassName('card')[0]
    let cartRowContents = `
    <div class="cart-row">
        <span>Mouse</span>
        <div>
            <span class="cart-price cart-column"><i class="fa-solid fa-indian-rupee-sign"></i>1,650</span>
            <button class="btn5"><i class="fa fa-xmark"></i></button>
        </div>
    </div>
    `;
    
    cartItems.append(cartRow)
}
function updateCartTotal(){
    let cartItem = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItem.getElementsByClassName('cart-row')
    let total = 0;
    for(let i=0; i<cartRows.length;i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var price = parseInt(priceElement.innerText.replace(',',''))
        total = total + price
    }
    document.getElementsByClassName('cart-price2')[0].innerHTML = "<i class='fa fa-indian-rupee-sign'></i>" +total
}