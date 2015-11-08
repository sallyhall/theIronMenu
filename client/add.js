var add = {
  init: function (){
    add.events();
  },


    events: function () {
    $(".add-item-containersubmit").on("click",function (event) {
      var newMenuItem = add.addMenuItemForm();
      event.preventDefault();
            $.ajax({
              type: 'POST',
              url: "/add-item",
              data: newMenuItem,
              success: function(data){
                console.log("Success");
                menuPage.currentDataSet=[newMenuItem];
                display.putMenuItems();
              },
              failure: function(data){
                console.log("Failure");
              }
            });
    });
  },
  styling: function (){
  },
  addMenuItemForm: function () {
    var itemForm = $("#addItem");
    var addItem = new MenuItem();
    addItem.breakfast=itemForm.find(".itemBreakfast")[0].checked;
    addItem.dinner=itemForm.find(".itemDinner")[0].checked;
    addItem.glutenFree=itemForm.find(".itemGF")[0].checked;
    addItem.vegetarian=itemForm.find(".itemVeg")[0].checked;
    addItem.lunch=itemForm.find(".itemLunch")[0].checked;
    addItem.name=itemForm.find(".itemName").val();
    addItem.price=itemForm.find(".itemPrice").val();
    addItem.priceRange=Math.floor(addItem.price/10) +1;
    addItem.type=itemForm.find(".selection").text().trim();
    switch (addItem.type){
      case "Appetizer":
        addItem.type =  "app";
        break;
      case "Entree":
        addItem.type =  "entree";
        break;
      case "Dessert":
        addItem.type =  "dessert";
        break;
      case "Drink":
        addItem.type =  "drink";
        break;
    }
    return addItem;
  },
};
