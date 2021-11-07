$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#story").show();
    event.preventDefault();