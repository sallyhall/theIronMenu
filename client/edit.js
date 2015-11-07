var edit = {
  init: function (){
    edit.styling();
    edit.events();
  },
  events: function () {
    $(".menu").on("click", ".glyphicon-pencil", function () {
      var $item = $(this).parent();
      $("#editID"+$item.attr("id")).removeClass("hidden");
    });
    $(".menu").on("click", ".submit",function (event) {
      event.preventDefault();
      var $item = $(this).parent();
      var id = $item.attr("id").slice(-1);
      var editedItem = edit.createItemFromEditForm(id);
      $.ajax({
        type: 'POST',
        url: '/edit-item',
        data: editedItem,
        success: function(data) {
          console.log("edited");
          $item.parent().replaceWith(menuPage.menuItemTemplate(editedItem));
        },
        failure: function(data) {
          console.log("FAILED TO EDIT ITEM: ", data);
        }
      });
    });
    //thanks to http://stackoverflow.com/questions/13437446/how-to-display-selected-item-in-bootstrap-button-dropdown-title
    $(".dropdown-menu li a").on('click', function(event){
      event.preventDefault();
      $(this).parents(".dropdown").find(".selection").text($(this).text());
      $(this).parents(".dropdown").find(".selection").val($(this).text());
    });
  },
  styling: function (){

  },
  createItemFromEditForm: function (id) {
    var itemForm = $("#editID"+id);
    var editedItem = new MenuItem();
    editedItem.breakfast=itemForm.find(".itemBreakfast")[0].checked;
    editedItem.dinner=itemForm.find(".itemDinner")[0].checked;
    editedItem.glutenFree=itemForm.find(".itemGF")[0].checked;
    editedItem.vegetarian=itemForm.find(".itemVeg")[0].checked;
    editedItem.id=id;
    editedItem.lunch=itemForm.find(".itemLunch")[0].checked;
    editedItem.name=itemForm.find(".itemName").val();
    editedItem.price=itemForm.find(".itemPrice").val();
    editedItem.priceRange=Math.floor(editedItem.price/10) +1;
    editedItem.type=itemForm.find(".selection").text().trim();
    switch (editedItem.type){
      case "Appetizer":
        editedItem.type =  "app";
        break;
      case "Entree":
        editedItem.type =  "entree";
        break;
      case "Dessert":
        editedItem.type =  "dessert";
        break;
      case "Drink":
        editedItem.type =  "drink";
        break;
    }
    return editedItem;
  }
};
