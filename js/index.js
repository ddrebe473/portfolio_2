$(document).ready(function() {
$("button").eq(0). on("click", function() 
{ 
   $(window).scrollTop(0);
});
$("button").eq(1). on("click", function() 
{ 
   $(window).scrollTop(1100);
});
$("button").eq(2). on("click", function() 
{ 
   $(window).scrollTop(2000);
});
$("button").eq(3). on("click", function() 
{ 
   $(window).scrollTop(4100);
});

var codeLanguages = ["HTML", "CSS", "JS", "Rust"]
var skillLevel =["70", "60", "50", "60","40"]
var barColor=["orange", "blue", "yellow", "green"]

new Chart("myChart", {
  type: "bar",
  data: {
    labels: codeLanguages,
    datasets: [{
      backgroundColor: barColor,
      data: skillLevel
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Coding skill level"
    }
  }


});

})