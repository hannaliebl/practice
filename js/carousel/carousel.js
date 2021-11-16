(function () {
  let curr = 0;
  const images = document.getElementsByClassName("carousel-image");
  document
    .getElementsByClassName("carousel-next")[0]
    .addEventListener("click", function () {
      hideImage(curr);
      if (curr + 1 > images.length - 1) {
        curr = 0;
      } else {
        curr++;
      }
      showImage(curr);
    });

  document
    .getElementsByClassName("carousel-prev")[0]
    .addEventListener("click", function () {
      hideImage(curr);
      if (curr - 1 < 0) {
        curr = images.length - 1;
      } else {
        curr--;
      }
      showImage(curr);
    });

  function showImage(i) {
    images[i].classList.add("carousel-visible");
  }

  function hideImage(i) {
    images[i].classList.remove("carousel-visible");
  }
})();
