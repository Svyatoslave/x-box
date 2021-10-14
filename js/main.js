const documentDisabledScroll = () => {
  const scrollbar = window.innerWidth - document.body.clientWidth;

  $(document.body).css("overflowY", "hidden");
  $(document.body).css("marginRight", `${scrollbar}px`);
};

const documentEnabledScroll = () => {
  $(document.body).css("overflowY", "visible");
  $(document.body).css("marginRight", "0");
};

const pauseVideo = () => {
  $("#video")
    .children()[0]
    .contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
};

const startVideo = () => {
  $("#video")
    .children()[0]
    .contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
};

const openModalVideo = () => {
  $("#modal-video").addClass("modal--show");
  documentDisabledScroll();
  startVideo();
};

const closeModalVideo = () => {
  $("#modal-video").removeClass("modal--show");
  documentEnabledScroll();
  pauseVideo();
};

$(() => {
  $("#trailer").click(openModalVideo);

  $("#modal-video-close").click(closeModalVideo);

  $(document.body).keydown((event) => {
    if (event.key === "Escape") closeModalVideo();
  });

  $("#modal-video").click((event) => {
    if ($("#modal-video").is(event.target)) closeModalVideo();
  });
});
