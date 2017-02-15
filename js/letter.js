$(document).ready(function() {
  $("#formOne").submit(function() {
    var personInput = $("input#person1").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(personInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#formOne, h1").hide();
    $(".letter").show();
    event.preventDefault();
  });
});
