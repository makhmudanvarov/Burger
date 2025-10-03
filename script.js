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

const extras = {
    doubleMayonnaise: {
        price: 2000,
        kcall: 50
    },
    lettuce: {
        price: 3000,
        kcall: 30
    },
    cheese: {
        price: 4000,
        kcall: 50
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

// Qo'shimcha souslar

const sousCheckboxes = document.querySelectorAll(".main__product-checkbox");

sousCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        const parent = this.closest(".main__product"),
              parentId = parent.getAttribute("id"),
              product = burgers[parentId],
              productPrice = parent.querySelector(".main__product-price span"),
              productKcall = parent.querySelector(".main__product-kcall span");

        // checked bo‘lsa qo‘shamiz, uncheck bo‘lsa ayiramiz
        if (this.checked) {
            product.price += extras[this.dataset.extra].price;
            product.kcall += extras[this.dataset.extra].kcall;
        } else {
            product.price -= extras[this.dataset.extra].price;
            product.kcall -= extras[this.dataset.extra].kcall;
        }

        // narx va kkalni yangilab qo'yamiz
        productPrice.innerHTML = product.Summ;
        productKcall.innerHTML = product.kcall * product.amount;
    });
});