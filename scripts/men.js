

displaymenitems(items);

<<<<<<< HEAD:scripts/men.js

=======
>>>>>>> af282a4 (new updates):myntra function clone/scripts/men.js


function displaymenitems(data){
    let menitemsContainerElement = document.querySelector('.men-container');
    let innerHTML = '';

    data.forEach(item => {
       if (item.category==='boys'){

    innerHTML += `
    <div class="item-container">
        <img class="item-img" src="../${item.image}" alt="item-image" onclick="goToProductDetail('${item.id}')" >
        

        <div class="rating">
            ${item.rating.stars} ⭐️ | ${item.rating.count}
        </div>

        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

    </div>
    `;
}}); 
menitemsContainerElement.innerHTML=innerHTML;          
}
function sortLowToHigh(){
    let sortedItems=[...items];
    sortedItems.sort((a,b) => a.current_price-b.current_price);
    displaymenitems(sortedItems);
    console.log("clicked");
}
function sortHighToLow(){
      let sortedItems=[...items];
      sortedItems.sort((a,b) => b.current_price-a.current_price);
      displaymenitems(sortedItems);
}
function sortRating(){
     let sortedItems=[...items];
      sortedItems.sort((a,b) => a.rating.stars-b.rating.stars);
      displaymenitems(sortedItems);
         
}