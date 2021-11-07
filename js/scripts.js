$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#results").show();
    event.preventDefault();
  });
});