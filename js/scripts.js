// UI logic
$(document).ready(function() {
  console.log("hi")
  $("#formOne").submit(function(event) {
    $(".results").show();
    event.preventDefault();
    const zodiac = $("#zodiac").val();
    console.log("zodiac", zodiac)
      let results = zodiac;
      if (zodiac.includes("Gemini" || zodiac.includes("Cancer"))) {
        console.log("Gemini")
        $(".javascript").toggle();
      } else if (zodiac.includes("Aquarius")) {
        console.log("Aquarius")
        $(".python").toggle();
      } else if (zodiac.includes("Libra")) {
        console.log("Libra")
        $(".ruby").toggle();
      }
    })
  });
    //$("#button").submit(function(){
//       console.log("hit it!")
//       $zodiac.fadeIn("Gemini", "Cancer", "Leo", "Virgo");
//       console.log("Gemini");
//       $zodiac.fadeIn("Aquarius", "Pisces", "Aries", "Taurus");
//       console.log("Aquarius");
//       $zodiac.fadeIn("Libra", "Scorpio", "Sagittarius", "Capricorn");
//       console.log("Libra");
//     });
// });

//business logic





//input:button[name=zodiac]:checked


// || zodiac.includes("Pisces") || zodiac.includes("Aries") || zodiac.includes("Taurus")){

// ("Scorpio"), ("Sagittarius"), ("Capricorn")