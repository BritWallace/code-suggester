$(document).ready(function() {
  console.log("hi")
  $("#formOne").submit(function(event) {
    $(".results").show();
    event.preventDefault();
    const zodiac = $("#zodiac").val();
    //const zodiac = [];
      let results = [];
      if (zodiac.includes("Gemini") || (zodiac.includes("Cancer")) || (zodiac.includes("Leo")) || (zodiac.includes("Virgo"))){
        console.log("Gemini")
        $(".javascript").toggle();
      } else if (zodiac.includes("Aquarius") || (zodiac.includes("Pisces")) || (zodiac.includes("Aries")) || (zodiac.includes("Taurus"))){
        $(".python").toggle();
      } else if (zodiac.includes("Libra") || (zodiac.includes("Scorpio")) || (zodiac.includes("Sagittarius")) || (zodiac.includes("Capricorn"))){
        $(".ruby").toggle();
      }
      })
    })

 
  // else if (zodiac.includes("Libra") || ("Scorpio") || ("Sagittarius") || ("Capricorn")) {
    // console.log("Libra")
    // $(".ruby").toggle();




// UI logic
// $(document).ready(function() {
//   console.log("hi")
//   $("#formOne").submit(function(event) {
//     $(".results").show();
//     event.preventDefault();
//     const zodiac = $("#zodiac").val();
//     console.log("zodiac", zodiac)
//       let results = zodiac;
//       if (zodiac.includes("Gemini" || "Cancer")) {
//         console.log("Gemini")
//         $(".javascript").toggle();
//       } else if (zodiac.includes("Aquarius" && "Pisces")) {
//         console.log("Aquarius")
//         $(".python").toggle();
//       } else if (zodiac.includes("Libra")) {
//         console.log("Libra")
//         $(".ruby").toggle();
//       }
//     })
//   });
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



//'Gemini', 'Cancer', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'