var filter = {
  init: function () {
    filter.events();
    filter.styling();
  },
  events: function () {
    $("aside").on("click",".dropdown-menu li a", function(event){
      event.preventDefault();
      $(this).parents(".dropdown").find(".selection").text($(this).text());
      // $(this).parents(".dropdown").find(".selection").val($(this).text());
      $(this).parents("div").siblings("div").addClass("hidden");
      $("#resetFilters").removeClass("hidden");
    });
    $("aside").on("click","input", function (event) {
      $(this).parents("div").siblings("div").addClass("hidden");
      $("#resetFilters").removeClass("hidden");
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
    });
  },
  styling: function () {

  },
};
