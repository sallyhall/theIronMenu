var display = {
  init: function (){
    display.styling();
  },
  events: function () {
    // body...
  },
  styling: function (){
    getAllMenuItems();
  }
};

var getAllMenuItems = function () {
    $.ajax({
        type: 'GET',
        url: '/menu',
        success: function(data) {
          menuPage.currentDataSet = JSON.parse(data);
          putMenuItems();
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
