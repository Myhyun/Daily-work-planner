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
  });


