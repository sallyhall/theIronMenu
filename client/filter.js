var filter = {
  init: function () {
    filter.events();
    filter.styling();
  },
  events: function () {
    $("aside").on("click",".dropdown-menu li a", function(event){
      event.preventDefault();
      $(this).parents(".dropdown").find(".selection").text($(this).text());
      $(this).parents("div").siblings("div").addClass("hidden");
      $("#resetFilters").removeClass("hidden");
      filter.category=$(this).parents(".dropdown").find("button").attr("id").slice(10).toLowerCase();
      filter.value=$(this).text().toLowerCase();
      filter.getFilteredItems(filter.category,filter.value);
    });
    $("aside").on("click","input", function (event) {
      $(this).parents("div").siblings("div").addClass("hidden");
      $("#resetFilters").removeClass("hidden");
      filter.category=$(this).parents("div").attr("id").slice(6).toLowerCase();
      filter.value=true;
      filter.getFilteredMenuItems(filter.category,filter.value);
    });
    $("#resetFilters").on("click",function (event) {
      event.preventDefault();
      $("#resetFilters").addClass("hidden");
      $(this).siblings("div").removeClass("hidden");
      _.each($(this).siblings("div").find("input"),function(box){
        box.checked=false;
      });
      $(this).siblings(".dropdown").find("#filterMenuType").find(".selection").text("Course");
      $(this).siblings(".dropdown").find("#filterMenuMeal").find(".selection").text("Meal");
      display.getAllMenuItems();
    });
  },
  styling: function () {

  },
  category:"",
  value:"",
  getFilteredMenuItems: function (category,value) {
    $.ajax({
      type: 'POST',
      url: '/filter-item',
      data: {category:value},
      success: function(data) {
        console.log("filtered");
        menuPage.currentDataSet=data;
        display.putMenuItems();
      },
      failure: function(data) {
        console.log("FAILED TO FILTER ITEMS: ", data);
      }
    });
  }
};
