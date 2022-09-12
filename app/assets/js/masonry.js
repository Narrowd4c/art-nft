let artWork = document.querySelector("#art-work");

let msnry = new Masonry(artWork, {
  percentPosition: true,
  horizontalOrder: true,
});

let msInit = function () {
  let msnry = new Masonry(artWork, {
    percentPosition: true,
    horizontalOrder: true,
  });
};

let collectionTab = document.querySelector("#collection-tab");
if (collectionTab) {
  collectionTab.addEventListener("shown.bs.tab", msInit);
}

imagesLoaded(artWork).on("progress", function () {
  msnry.layout();
});
