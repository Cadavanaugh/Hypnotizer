$(() => {
  const mainWindow = $(".main");
  const modalWindow = $(".modal");

  $("button").click(() => {
    //Random clock at each attempt
    const randomNum = Math.floor(Math.random() * 4 + 1);
    $(".clock img").attr("src", `./clocks/clock${randomNum}.gif`);
    
    //Time input and validation
    let minutes = parseInt($("#min").val());
    let seconds = parseInt($("#sec").val());
    if (!minutes && seconds) minutes = 0;
    if (minutes && !seconds) seconds = 0;

    if (!minutes && !seconds) {
      alert("You're supposed to input some time.");
    } else {
      //Fade-in of modal window
      mainWindow.fadeOut();
      modalWindow.fadeIn();

      //60-seconds-to-1-minute conversion
      if (seconds > 60) {
        minutes += parseInt(seconds / 60);
        seconds = seconds % 60;
      }

      //Stringify variable
      function stringTime(x) {
        let a = String(x);
        if (a.length < 2) a = ("0" + a).slice(-2);
        return a;
      }

      $(".black p").text(`${stringTime(minutes)}:${stringTime(seconds)}`);

      //Timer function
      function crono() {
        if (minutes > 0 && seconds === 0) {
          minutes -= 1;
          seconds += 60;
        }
        seconds -= 1;
        console.log(minutes + ":" + seconds);
        if (minutes === 0 && seconds === 0) clearInterval(timer);
        $(".black p").text(`${stringTime(minutes)}:${stringTime(seconds)}`);
      }
      //Starting timer
      let timer = setInterval(crono, 1000);

      //Fade-out modal window
      $(".x").click(() => {
        modalWindow.fadeOut();
        mainWindow.fadeIn();
        clearInterval(timer);
      });
    }
  });
});
