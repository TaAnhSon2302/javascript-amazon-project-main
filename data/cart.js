export const cart = [];

export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
         matchingItem = cartItem;
    }
  })
  const quanitySelector = document.querySelector(`.js-quanity-selector-${productId}`);
  const quanity = Number(quanitySelector.value)
  if(matchingItem){
    matchingItem.quanity+=quanity;
  }else{
    cart.push({
      productId,
      quanity,
    });
  }
}