

//===========PRODUCT COUNTER (CART)===============

let productsCountEl = document.getElementById("products-counter")

let addToCartBtns = document.querySelectorAll(".add-to-cart")

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

//===========IS PRODUCT ICONS CHECKED===============

let imgCheckIconsEl = document.querySelectorAll(".check-icons div");

for (let i = 0; i < imgCheckIconsEl.length; i++) {
    
    imgCheckIconsEl[i].addEventListener("click", function() {

        let imageButton = imgCheckIconsEl[i].firstChild;        
        let chkClass = imageButton.getAttribute("class");
        let imgUrl = imageButton.getAttribute("src");        

        if (chkClass === "img-chk") {
            if (imgUrl === "images/check_blue.png") {
                imageButton.setAttribute("src", "images/check.png")
                imgCheckIconsEl[i].setAttribute("class", "check-icons-blue-bg")
            } else {
                imageButton.setAttribute("src", "images/check_blue.png")
                imgCheckIconsEl[i].removeAttribute("class")
            }
        } else {
            if (imgUrl === "images/like_blue.png") {
                imageButton.setAttribute("src", "images/like.png")
                imgCheckIconsEl[i].setAttribute("class", "check-icons-blue-bg")
            } else {
                imageButton.setAttribute("src", "images/like_blue.png")
                imgCheckIconsEl[i].removeAttribute("class")
            }
        }        
    })
}
