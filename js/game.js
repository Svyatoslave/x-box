const playYouTube = () => {
  $("#video__trailer")[0].src += "1;";
};

$(() => {
  $(".video__placeholder").on("click", function () {
    $(".video__placeholder").hide(1500);
    $(".video-btn").hide(1500, playYouTube());
  });
});
