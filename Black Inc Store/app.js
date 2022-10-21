const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {id:1,
    title:"SWEATS",
    price: 600,
    colors: [
        {
            code: "red",
            img: "./MERCH BLACK INC/prod (19).jpg",
        },
        {
            code: "orange",
            img: "./MERCH BLACK INC/prokjhd (17).jpg",
        },
        {
            code: "gray",
            img: "./MERCH BLACK INC/prod (16).jpg",
        },
    ],
},

{id:2,
    title:"TSHIRTS",
    price: 300,
    colors: [
        {
            code: "brown",
            img: "./MERCH BLACK INC/prod (2).jpg",
        },
        {
            code: "gray",
            img: "./MERCH BLACK INC/prodd34.jpg",
        },
        {
            code: "white",
            img: "./MERCH BLACK INC/prodn (4).jpg",
        },
       
    ],
},
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
   //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
   //change the chosen product
        chosenProduct = products[index]
   //change text of currentProduct
   currentProductTitle.textContent = chosenProduct.title;
   currentProductPrice.textContent = "R" + chosenProduct.price;
   currentProductImg.src = chosenProduct.colors[0].img;
        
   currentProductColors.forEach((color,index)=>{
    color.style.backgroundColor = chosenProduct.colors[index].code;
   });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
        size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})