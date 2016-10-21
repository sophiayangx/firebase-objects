addListItem("product-list", {name: "ham sanwhich"})

onNewListItem("product-list", function(product) {
  console.log(product.price)
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thinking-face.png")  

  $(".product-list-container").append(nameHeader, image)
})