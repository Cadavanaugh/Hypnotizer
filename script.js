$(() => {
  const mainWindow = $(".main");
  const modalWindow = $(".modal");

  $("button").click(() => {
    let minutes = parseInt($("#min").val());
    let seconds = parseInt($("#sec").val());
    if (!minutes && seconds) minutes = 0;
    if (minutes && !seconds) seconds = 0;

    if (!minutes && !seconds) {
      alert("You're supposed to input some time.");
    } else {
      mainWindow.fadeOut();
      modalWindow.fadeIn();

      if (seconds > 60) {
        minutes += parseInt(seconds / 60);
        seconds = seconds % 60;
      }

      function stringTime(x, y) {
        x = String(x);
        y = String(y);
        if (x.length === 1) x = ("0" + x).slice(-2);
        if (y.length === 1) y = ("0" + y).slice(-2);
      }
      stringTime(minutes, seconds);
      console.log(`Minutes: ${minutes}\nSeconds: ${seconds}`);
      $(".black p").text(`${minutes}:${seconds}`);
    }
  });

  $(".x").click(() => {
    modalWindow.fadeOut();
    mainWindow.fadeIn();
  });
});
