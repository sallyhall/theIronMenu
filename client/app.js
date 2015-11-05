var menuPage = {
  init: function (){
    // display.init();
    //edit.init();
  },
  events: function () {

  },
  styling: function (){

  },
  url: "localhost:3000",
  menuItemTemplate: _.template($("#menuItemTmpl").html()),
  currentDataSet: {},
}


$(document).ready(function () {
  menuPage.init();
});
