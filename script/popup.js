let addToCartBtn = document.getElementsByClassName("add-cart");

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", addToCart);
}

function addToCart(event) {
    let btn = event.target;
    let btn_parent = btn.parentElement;
    let btn_grandparent = btn.parentElement.parentElement;
    let itemName = btn_grandparent.children[1].innerText;
    let itemPrice = btn_parent.children[0].innerText;

    // Get the .item-added-pop-up element
    let itemAddedPopup = btn_grandparent.querySelector(".item-added-pop-up");

    // Show the itemAddedPopup by changing its opacity
    itemAddedPopup.style.opacity = "1";

    // Log the item name and price
    console.log(itemName);
    console.log(itemPrice);

    // You can optionally add a delay to hide the message after a few seconds
    setTimeout(function () {
    // Hide the itemAddedPopup by changing its opacity
        itemAddedPopup.style.opacity = "0";
    }, 500); // Adjust the delay (in milliseconds) as needed
}
