var menuPage = {
  init: function (){
    display.init();
    deleteItem.init();
    add.init();
    edit.init();
  },
  events: function () {

  },
  styling: function (){

  },

  menuItemTemplate: _.template($("#menuItemTmpl").html()),
  currentDataSet: {},
};

var MenuItem = function(breakfast,dinner,glutenFree,id,lunch,name,price,type,vegetarian){
  this.breakfast = breakfast;
  this.dinner=dinner;
  this.glutenFree=glutenFree;
  this.id=id;
  this.lunch=lunch;
  this.name=name;
  this.price=price;
  this.priceRange=Math.floor(price/10) +1;
  this.type=type;
  this.vegetarian=vegetarian;
};


$(document).ready(function () {
  menuPage.init();
});
