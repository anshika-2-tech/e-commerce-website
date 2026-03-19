displayProductDetail();

let wishItem = JSON.parse(localStorage.getItem("wishItem")) || [];


function goToProductDetail(id){
    localStorage.setItem("selectedItemId",id);

    window.location.href = "/pages/product_detail.html";


}

function displayProductDetail(){

    let productContainer = document.querySelector(".product-details");
    if(!productContainer){


     return;}

    let itemId = localStorage.getItem("selectedItemId");

    let item = items.find(item => item.id == itemId);
    if(!item){
        productContainer.innerHTML="<h2> Product Not Found</h2>";
        return;
    }

    let innerHTML = `
    <div class="product-image">
        <img src="../${item.image}" class="img">
    </div>

    <div class="product-detail-container">

        <div class="product-company" style="font-size:35px;color:white;">
            ${item.company}
        </div>

        <div class="item-name" style="font-size:25px; margin:10px 0;">
            ${item.item_name}
        </div>

        <div class="rating" style="font-size:15px;">
            ${item.rating.stars} ⭐ | ${item.rating.count} Rating
        </div>

        <hr>

        <div class="price" style="margin-top:20px;">
            <span style="font-size:22px;color:white">₹ ${item.current_price}</span>
            <span style="color:white;font-size:18px;">MRP</span>
            <span style="text-decoration:line-through; color:white;">₹ ${item.original_price}</span>
            <span style="color:pink;">(${item.discount_percentage}% OFF)</span>
        </div>

        <div class="detail">inclusive of all taxes</div>

        <div class="product-size">
            <div style="font-size:19px; margin-top:15px; color:white;">SELECT SIZE</div>

            <button class="size-btn" onclick="selectSize(this)">XS</button>
            <button class="size-btn" onclick="selectSize(this)">S</button>
            <button class="size-btn" onclick="selectSize(this)" >M</button>
            <button class="size-btn" onclick="selectSize(this)">L</button>
        </div>

        <div class="action-container">
            <button class="atb" onclick="addToBag('${item.id}')">
                <span class="material-symbols-outlined">shopping_bag</span>
                Add To Bag
            </button>

            <button class="w" onclick="addToWish('${item.id}')">
                <span class="material-symbols-outlined">favorite</span>
                Wishlist
            </button>
        </div>

        <div class="delivery">
            <div class="d">
                DELIVERY OPTIONS
                <span class="material-symbols-outlined">delivery_truck_speed</span>
            </div>

            <div class="pincode-container">
                <input type="text" placeholder="Enter pincode">
                <button>Check</button>
            </div>

            <p style="font-size:13px;margin-top:10px;color:white;">
                Please enter PIN code to check delivery time & Pay on Delivery Availability
            </p>

            <p style="line-height:25px; color:white;">
                100% Original Products<br>
                Pay on delivery might be available<br>
                Easy 14 days returns and exchanges
            </p>
        </div>

        <div class="product_info">

            <div class="d">PRODUCT DETAILS</div>

            <p>Yellow floral print bodycon dress</p>
            <p>Shoulder straps</p>
            <p>Sleeveless, regular sleeves</p>
            <p>Knee length in straight hem</p>

            <h3>Size & Fit</h3>
            <p>The model (height 5'8) is wearing a size S</p>

            <h3>Material & Care</h3>
            <p>Cotton Machine Wash</p>

            <p>Product Code: <b>34725276</b></p>
            <p>Seller: <b style="color:lightpink;">H & M</b></p>

        </div>

    </div>
    `;

    productContainer.innerHTML = innerHTML;
}


function selectSize(button){
  let buttons = document.querySelectorAll(".size-btn");
  buttons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");

}

 function addToWish(itemId){
    
    if(wishItem.includes(itemId)){
        alert("Item already present in Wishlist ❤️");
        return;
    }
    
    wishItem.push(itemId);
    localStorage.setItem('wishItem', JSON.stringify(wishItem));
    alert("Item added to Wishlist");

}
console.log(wishItem);


