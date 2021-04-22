$(() => {
  const mainWindow = $(".main");
  const modalWindow = $(".modal");
  $("button").click(() => {
    mainWindow.css("display", "none");
    modalWindow.css("display", "flex");
  });
  $(".x").click(() => {
      mainWindow.css("display",'block')
      modalWindow.css("display",'none')
  });
});
