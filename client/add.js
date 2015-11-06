var add = {
  init: function (){
    // body...
  },
  events: function () {
    // body...
  },
  styling: function (){

  }
};

setMenuItem: function(item){
  menuPage.currentMenuItem = item;
};

editCurrentItem: function(oldMenuItem, newMenuItem){
    _.each(menuPage.currentServerData, function(currVal, idx, arr){
        if(currVal.menuItem === oldMenuItem){
          var editedItem = {
            _id: currVal._id,
            menuItem: newMenuItem,
            msg: currVal.MnItem
          };

          $.ajax({
            type: 'PUT',
            url: menuPage.url + currVal._id,
            data: editedMenuItem,
            async: false,
            success: function(resp){
              console.log("Success");
            },
            failure: function(resp){
              console.log("Failure");
            }
          });
