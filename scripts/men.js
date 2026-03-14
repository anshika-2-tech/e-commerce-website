

displaymenitems();

displayProductDetail();

function displaymenitems(){
    let menitemsContainerElement = document.querySelector('.men-container');
    let innerHTML = '';

    items.forEach(item => {
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