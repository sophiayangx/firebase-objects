addListItem("product-list", 
  {
  name: "wowza"
//  picture: "10"
})

onNewListItem("product-list", function(product) {
  console.log(product.picture)
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", product.picture) 

  $(".product-list-container").append(nameHeader, image)
})