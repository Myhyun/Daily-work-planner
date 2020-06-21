$(function () {
  updateTime();
  setInterval(function () {
    updateTime();
  }, 1000);
  function updateTime() {
    var timeEl = $("#time");
    var dateEl = $("#date");
    var now = moment();
    var formattedTime = now.format("h:mm:ss");
    var formattedDate = now.format("MM/DD/YYYY");
    timeEl.text(formattedTime);
    dateEl.text(formattedDate);
    $("#currentDay").text(formattedDate);
  }

  var currentHour = moment().hour();
  console.log(currentHour);

  $(".time-block").each(function () {
    var timeSlot = parseInt($(this).attr("id"));
    if (timeSlot > currentHour) {
      $(this).attr("class", "row time-block future");

    } else if (timeSlot < currentHour) {
      $(this).attr("class", "row time-block past");

    } else if (timeSlot === currentHour)
      $(this).attr("class", "row time-block present");
  });

  $(".btn").on('click', function (event) {
    var userInput = $(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, userInput);
    var plans = localStorage.setItem(time, JSON.stringify(userInput));
    console.log(plans);
    $(".description").text(localStorage.getItem(plans));
  });
});
