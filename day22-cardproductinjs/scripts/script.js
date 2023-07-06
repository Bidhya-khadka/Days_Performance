const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }

  // console.log(products);
};
getProducts()
  .then((prods) => {
    // backend batabase data aayesi loop lagayera card ma dekhauni
    // product lai card ma dekauni so map method of array used
    prods.map((prod) => {
      // create main div to append images and body
      const mainDiv = document.createElement("div");
      mainDiv.className = "card";
      mainDiv.style.width = "30%";
      // create img dynamically from prod,thumbnail consist of image link for src in image
      const image = document.createElement("img");
      image.className = "h-75";
      image.src = prod.thumbnail;

      // create div for card-body
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList = "card-body";

      // create h5 el
      const cardTitleh5 = document.createElement("h5");
      cardTitleh5.classList = "card-title";
      cardTitleh5.innerHTML = prod.title;

      //create p el
      const cardTextP = document.createElement("h5");
      cardTextP.classList = "card-text";
      cardTextP.innerHTML =
        prod.description.length > 20
          ? prod.description.slice(0, 20) + `...`
          : prod.description;

      // create button element
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-primary", "btn-sm");
      btn.innerHTML = "View Details";

      // appending each element
      // append card title in card body
      cardBodyDiv.appendChild(cardTitleh5);
      // append card title in card text
      cardBodyDiv.appendChild(cardTextP);
      // append card title in card text
      cardBodyDiv.appendChild(btn);
      // append image and card body div inside main div
      mainDiv.appendChild(image);
      mainDiv.appendChild(cardBodyDiv);

      document.getElementById("container").appendChild(mainDiv);
    });
  })
  .catch((err) => {
    console.log(err);
  });
