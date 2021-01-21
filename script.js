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


      function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
      }

      function searchWeather(searchValue) {
          $.ajax({
              type: "GET", 
              url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=e6cf8c17c234148e2aa482d264e65514",
              dataType: "json",
              success: function(data) {
                if (history.indexOf(searchValue) === -1) {
                  history.push(searchValue);
                  window.localStorage.setItem("history", JSON.stringify(history));            
                  makeRow(searchValue);
                }

                  $("today").empty();

                  var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                  var card = $("<div>").addClass("card");
                                     

              }
          })
      }

});