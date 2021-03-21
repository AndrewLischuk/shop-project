

//===============PRODUCT COUNTER (CART)===============

let productsCountEl = document.getElementById("products-counter")

let addToCartBtns = document.querySelectorAll(".add-to-cart")

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

//===============IS PRODUCT ICONS CHECKED===============

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

//===============MORE DETAILS FORM===============

let detailsBtn = document.querySelectorAll(".details");
let modalForm = document.querySelector(".modal");
let closeModalForm = document.querySelector(".btn-close");

detailsBtn.forEach(btn => {
    btn.addEventListener("click", openModal)
})

closeModalForm.addEventListener("click", hideModal)

function openModal() {
    modalForm.classList.remove("hide");
    modalForm.classList.add("show");
}

function hideModal() {
    modalForm.classList.add("hide");
    modalForm.classList.remove("show");
}

modalForm.addEventListener("click", function(e) {
    if(e.target === modalForm) {
        hideModal()
    }
})
//===============MORE DETAILS FORM SCROLL===============

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2){
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll)

//===============PRODUCTS QUANTITY===============

let quantityBtn = document.querySelectorAll(".quantity-btn");
let quantityField = document.querySelectorAll(".products-quantity input");

for (let i = 0; i < quantityBtn.length; i++) {
    if (i % 2 === 0) {        
        quantityBtn[i].addEventListener("click", function() {
            if (quantityField[Math.floor(i/2)].value > 1) {
               quantityField[Math.floor(i/2)].value = +quantityField[Math.floor(i/2)].value - 1;
            }            
        })
    } else {
        quantityBtn[i].addEventListener("click", function() {
            quantityField[Math.floor(i/2)].value = +quantityField[Math.floor(i/2)].value + 1;
        })
    }
}
