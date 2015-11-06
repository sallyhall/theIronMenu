var display = {
  init: function (){
    // body...
  },
  events: function () {
    // body...
  },
  styling: function (){

  }
};

var getAllMenuItems = function () {
    $.ajax({
        type: 'GET',
        url: menuPage.url,
        success: function(data) {
        menuPage.currentDataSet = JSON.parse(data);
          // this line will refer to the function that will edit the menuItem
        },
        failure: function(data) {
          console.log("FAILURE: ", data);
        }
      });
};

var putMenuItems = function () {
  var itemHTML;
  _.each(menuPage.currentDataSet, function(currVal, idx, arr){
      itemHTML=menuPage.menuItemTemplate(currVal);
      $('.menu').append(itemHTML);
    });


};
