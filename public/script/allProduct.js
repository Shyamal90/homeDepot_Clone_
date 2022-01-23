

  data= async(page,size)=>{
//    console.log("page","size",page,size)
   const response=await fetch(`http://localhost:2345/products/all?page=${page}&size=${size}`)
   let productsData=await response.json()
   console.log("productData",productsData)
   displayData(productsData);
  
   localStorage.setItem("productsData",JSON.stringify(productsData))
}
//   data();

  let allproductData = JSON.parse(localStorage.getItem("productsData"));
   console.log("allproductData",allproductData)
document.querySelector("#sortEl").addEventListener("change",()=>{
    let value = document.querySelector("#sortEl").value;
   
  

      if(value === "low"){
        // console.log("hi");
        let newArr =allproductData.sort((a,b)=>{
            return a.current_price - b.current_price;
        })
        // console.log(newArr);
        displayData(newArr);
    }else if(value === "high"){
        // console.log("hello");
        let newArr = allproductData.sort((a,b)=>{
            return b.current_price - a.current_price;
        })
        // console.log(newArr);
        displayData(newArr);
    }else if(value === "topRate"){
        let newArr = allproductData.sort((a,b)=>{
            return b.rating - a.rating;
        })
        displayData(newArr);
    }
    else if(value === "mostpopular"){
        let newArr = allproductData.sort((a,b)=>{
            return b.favorite-a.favorite;
        })
        displayData(newArr);
    }
  
})


function displayData(productArr){
    document.querySelector(".product-container").innerHTML = "";
    productArr.map((productData)=>{

        // 
        let product = document.createElement("div");
        product.setAttribute("class","product");
        
        let img = document.createElement("img");
        img.setAttribute("class","productImg")
        img.setAttribute("src",productData.main_image);
        img.addEventListener("click",()=>{
            window.location.href = "http://localhost:2345/products/description";
            localStorage.setItem("products",JSON.stringify(productData));
            
        })
        
        // Heart Logo Design
        
        let favorite_div=document.createElement("div")
        favorite_div.setAttribute("class","favorite_div")

        let heartLogo = document.createElement("img");
        heartLogo.setAttribute("class","heartLogo");
        heartLogo.setAttribute("src","https://assets.thdstatic.com/images/v1/favorite_default.svg");
        let favorites=document.createElement("p")
        favorites.setAttribute("class","favorites")
        favorites.innerHTML=productData.favorite;

        favorite_div.append(heartLogo,favorites)
        
        let color_container = document.createElement("div");
        color_container.setAttribute("class","color_container");
        
        let firstBox = document.createElement("div");
        firstBox.setAttribute("class","firstBox");
        let colour_btn1=document.createElement("img")
        colour_btn1.setAttribute("src",productData.colour_btn1)
        firstBox.append(colour_btn1)
        let secondBox = document.createElement("div");
        secondBox.setAttribute("class","secondBox");
        let colour_btn2=document.createElement("img")
        colour_btn2.setAttribute("src",productData.colour_btn2)
        secondBox.append(colour_btn2)
        
        color_container.append(firstBox,secondBox);
        
        
        let title = document.createElement("p");
        title.setAttribute("class","title");
        title.innerHTML = productData.product_name;
        
        // Model Number
        
        let modelNo = document.createElement("p");
        modelNo.setAttribute("class","modelNo");
        modelNo.innerHTML = "by" + " " +`<style font-size:bold></style>${productData.manufacturer}`;
        // console.log(product.model);
        
        // Rating star
        let rating_div = document.createElement("div");
        rating_div.setAttribute("class","rating_div");
        
        let stars = document.createElement("p");
        stars.setAttribute("class","stars");
        stars.innerHTML = `<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
        
        
        
        // total rating 
        
        let ratingCount = document.createElement("p");
        ratingCount.setAttribute("class","ratingCount");
        ratingCount.innerHTML = "(" + productData.rating+ ")";
        
        rating_div.append(stars,ratingCount);
        
        
        // Price Section
        
        let price = document.createElement("p");
        price.setAttribute("class","price");
        price.innerHTML = `<span class="dollar">$</span>` + productData.current_price;

      let otherDiv=document.createElement("div")
      otherDiv.setAttribute("class","otherDiv")


        let old_price=document.createElement("p")
        old_price.setAttribute("class","old_price")
        old_price.innerHTML=`$${productData.old_price}`
      
    
        let savingDiv=document.createElement("div")
       savingDiv.setAttribute("class","savingDiv")

        let saving_price=document.createElement("p")
        saving_price.setAttribute("class","saving_price")
        saving_price.innerHTML=`Save $${productData.saving}`

        let percentage=document.createElement("p")
        percentage.setAttribute("class","percentage")
        percentage.innerHTML=`(${productData.percentage}%)`

       
       savingDiv.append(saving_price,percentage)
       otherDiv.append(old_price,savingDiv)
        let priceLogo = document.createElement("img");
        priceLogo.setAttribute("class","priceLogo");
        priceLogo.setAttribute("src","	https://assets.thdstatic.com/images/v1/Value-Pricing-Special-Buy.svg");
        
        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("class","priceDiv");
        priceDiv.append(priceLogo,price,otherDiv);
        
        // let descrip = document.createElement("p");
        // descrip.setAttribute("class","descrip");
        // descrip.innerHTML = productData.description;
        
        // PickUp Section
        let pickUp = document.createElement("div");
        pickUp.setAttribute("class","pickUp");



        let crossImg = document.createElement("img");
        crossImg.setAttribute("class","crossImg");
        crossImg.setAttribute("src","https://assets.thdstatic.com/images/v1/close-x-black.svg");
        
        let pickUpDiv = document.createElement("div");
        pickUpDiv.setAttribute("class","pickUpDiv");
        pickUpDiv.innerHTML = `<span class="pickupHeading">Pickup</span>` + productData.pickup;
        
        pickUp.append(crossImg,pickUpDiv);
        
        
        // Delivery Section
        let deliveryDiv = document.createElement("div");
        deliveryDiv.setAttribute("class","deliveryContainer");
        
        let anotherCross = document.createElement("img");
        anotherCross.setAttribute("class","anotherCross");
        anotherCross.setAttribute("src","https://assets.thdstatic.com/images/v1/close-x-black.svg");
        
        let deliveryHeading = document.createElement("div");
        deliveryHeading.setAttribute("class","Heading");
        deliveryHeading.innerHTML = `<span class="deliveryheading">Delivery</span>` + productData.delivery+
        `<img src="https://assets.homedepot-static.com/images/v1/info.svg">`;
        
        deliveryDiv.append(anotherCross,deliveryHeading)
        
        
        // Add to Cart Button
        
        let addToCartBtn = document.createElement("button");
        addToCartBtn.setAttribute("class","addToCartBtn");
        addToCartBtn.innerHTML = "Add to Cart";
        addToCartBtn.addEventListener("click",()=>{
         
            console.log("productData line 210",productData)
            localStorage.setItem("products",JSON.stringify(productData));
               window.location.href = "http://localhost:2345/products/description";
            
        })
        // hover effect
        // product.addEventListener("mouseover",()=>{
        //     addToCartBtn.style.display="block";
        // })
        
        // product.addEventListener("mouseleave",()=>{
        //     addToCartBtn.style.display="none";
        // })
        
        product.append(img,favorite_div,color_container,title,modelNo,rating_div,priceDiv,pickUp,deliveryDiv,addToCartBtn);
        document.querySelector(".product-container").append(product);
        })
}




