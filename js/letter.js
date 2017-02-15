$(document).ready(function() {
  $("#formOne").submit(function() {
    var personInput = $("#person1").val();
    var streetInput = $("#street").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipInput = $("#zip").val();

    $(".name").text(personInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#letter").show();
    event.preventDefault();
  });
});
