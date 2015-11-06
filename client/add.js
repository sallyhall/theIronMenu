var add = {
  init: function (){
    // body...
  },
  events: function () {
    // body...
  },
  styling: function (){

  }
  setMenuItem: function(){
    var newMenuItem = new MenuItem();
    newMenuItem.breakfast = breakfast;
    newMenuItem.dinner=dinner;
    newMenuItem.glutenFree=glutenFree;
    newMenuItem.id=id;
    newMenuItem.lunch=lunch;
    newMenuItem.name=name;
    newMenuItem.price=price;
    newMenuItem.type=type;
    newMenuItem.vegetarian=vegetarian;
  },
  addNewItem: function(newMenuItem){
            $.ajax({
              type: 'POST',
              url: /add-item,
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
  }
};
