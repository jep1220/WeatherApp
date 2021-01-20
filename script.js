$(document).ready(function() {
    $("#search-button").on("click", function() {
        var searchValue = $("#search-value").val();
    
        // clear input box
        $("#search-value").val("");
    
        searchWeather(searchValue);
      });

      $(".history").on("click", "li", function() {
        searchWeather($(this).text());
      });


});