var filter = {
  init: function () {
    filter.events();
    filter.styling();
  },
  events: function () {
    $("aside .dropdown-menu li a").on("click", function(event){
      event.preventDefault();
      $(this).parents(".dropdown").find(".selection").text($(this).text());
    });
    $("#resetFilters").on("click",function (event) {
      event.preventDefault();
      filter.requestString="";
      _.each($(this).siblings("div").find("input"),function(box){
        box.checked=false;
      });
      $(this).siblings(".dropdown").find("#filterMenutype").find(".selection").text("Course");
      $(this).siblings(".dropdown").find("#filterMenumeal").find(".selection").text("Meal");
      display.getAllMenuItems();
    });
    $("#submitFilters").on("click", function (event) {
      event.preventDefault();
      if ($("#filterMenumeal").find(".selection").text()!="Meal"){
        filter.requestString += $("#filterMenumeal").find(".selection").val().toLowerCase()+"=true";
      }
      if ($("#filterMenutype").find(".selection").text()!="Course"){
        if (filter.requestString.length>0){
          filter.requestString+="&";
        }
        filter.requestString += "type="+$("#filterMenutype").find(".selection").val().toLowerCase();
      }
      if ($("#filtervegetarian").find("input")[0].checked){
        if (filter.requestString.length>0){
          filter.requestString+="&";
        }
        filter.requestString+="vegetarian=true";
      }
      if ($("#filterglutenFree").find("input")[0].checked){
        if (filter.requestString.length>0){
          filter.requestString+="&";
        }
        filter.requestString+="glutenFree=true";
      }
      filter.getFilteredMenuItems();
      filter.requestString="";
    });

  },
  styling: function () {

  },
  requestString:"",

  getFilteredMenuItems: function () {
    $.ajax({
      type: 'GET',
      url: '/menu',
      data: filter.requestString,
      success: function(data) {
        console.log("filtered");
        $(".menu").html("");
        menuPage.currentDataSet=JSON.parse(data);
        display.putMenuItems();
      },
      failure: function(data) {
        console.log("FAILED TO FILTER ITEMS: ", data);
      }
    });
  }
};
