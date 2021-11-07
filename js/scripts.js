$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#results").show();
    event.preventDefault();
    const zodiac = $("input:button[name=zodiac]:checked").val();
      let result 
      if (zodiac === "gemini, cancer, leo, virgo") {
        $("#javascript").toggle();
      } else if (zodiac === "aquarius, pisces, aries, taurus") {
        $("#python").toggle();
      } else if (zodiac === "libra, scorpio, sagittarius, capricorn") {
        $("#ruby").toggle();
      }
  });
});