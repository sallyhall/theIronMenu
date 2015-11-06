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



$(document).ready(function () {
  menuPage.init();
});
