$(document).ready(function() {
  $("#survey").submit(function(event) {
    var name = $("#name").val();
    var age = $("input:radio[name=age]:checked").val();

    $(".name").text(name);
    $(".age").text(age);

    $(".answer").show();
    event.preventDefault();
  });
  $(".answer").click(function(event) {
    alert("Thank you for taking time to answer our survey, Hope you have a great day!");

    event.preventDefault();
  })
});
