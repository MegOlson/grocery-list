$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4", "item5"];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("." + item).text(userInput);
      $("#list").hide();
    });
    $("#finalList").show();
  });
});
