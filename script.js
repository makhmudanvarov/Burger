// Database
const burgers = {
    plainBurger: {
        id: 1,
        name: "gamburger",
        price: 10000,
        amount: 0,
        img: "images/product2.jpg",
        get Summ() {
            return this.price * this.amount;
        },
        kcall: 400,
    },
    freshBurger: {
        id: 2,
        name: "gamburgerFresh",
        price: 20500,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        kcall: 600,
    },
    freshCombo: {
        id: 2,
        name: "freshCombo",
        price: 31900,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        kcall: 800,
    }
}

// Product buttonlarga ulanib oldim
const productBtns = document.querySelectorAll(".main__product-btn")

productBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // this qilib otasini klassi bo'yicha oldim ya'ni main_product ni
        const parent = this.closest(".main__product"),
            productAmount = parent.querySelector(".main__product-num"),
            productPrice = parent.querySelector(".main__product-price span"),
            parentId = parent.getAttribute("id"),
            productKcall = parent.querySelector(".main__product-kcall span"),
            // bu yerda burgers endi product bo'lib ishlaydi
            product = burgers[parentId]

        if (this.classList.contains("plus")) {
            product.amount++
        } else if (this.classList.contains("minus") && product.amount > 0) {
            // minus bo'lsa va noldan katta bo'lsa deyilgan, minusga qarab ketib qolmasligi uchun
            product.amount--;
        }

        productAmount.innerHTML = product.amount;
        productPrice.innerHTML = product.Summ;
        productKcall.innerHTML = product.kcall * product.amount;
    })
});

// Rasmlarni click qilganda ekranga chiqaramiz va view close bo'lganda o'chiramiz
const mainProductImg = document.querySelector(".clicked__img"),
    mainProductInfo = document.querySelectorAll(".main__product-info"),
    viewActive = document.querySelector(".view"),
    viewClose = document.querySelector(".view__close")

mainProductInfo.forEach((imgs) => {
    imgs.addEventListener('click', () => {
        const newSrc = imgs.querySelector(".main__product-img");

        // qaysi img ustiga bosilgan bo'lsa ekranga chiqadi
        if (newSrc) {
            viewActive.classList.add('active');
            mainProductImg.setAttribute("src", newSrc.src)
        }
    })
    // view close bosilganda rasm o'chadi
    viewClose.addEventListener('click', () => {
        viewActive.classList.remove('active');
    })
})

// qo'shimcha souslar

const mainProductLabel = document.querySelector(".main__product-label"),
    mainProductCheckbox = document.querySelector(".main__product-checkbox")

