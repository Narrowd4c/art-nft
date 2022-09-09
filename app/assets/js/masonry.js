let artWork = document.querySelector("#art-work");
let msnry = new Masonry(artWork, {
  percentPosition: true,
  horizontalOrder: true,
});

imagesLoaded(artWork).on("progress", function () {
  // layout Masonry after each image loads
  msnry.layout();
});
