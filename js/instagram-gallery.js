(function () {
  const carouselInstagramItems = [
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src="img/instagram/olga-hair.jpg" alt="Olga Hair"></div>',
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src="img/instagram/pink-hair.jpg" alt="Girl With Pink Hair"></div>',
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src="img/instagram/ann-hair.jpg" alt="Ann in Hair Salon"></div>',
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src ="img/instagram/diego-hair.jpg" alt = "Diego with Dark Hair"></div> ',
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src ="img/instagram/red-hair.jpg" alt = "Girl With Red Hair"></div>',
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src ="img/instagram/blond-haircut.jpg" alt = "Girl with Long Light Hair"></div>',
    '<div class="instagram-gallery-item fade"><img class="instagram-gallery-item-img" src ="img/instagram/long-hair.jpg" alt = "Girl with long hair in Hair Salon"></div>',
  ];
  let currentItemIndex = 0;
  function renderInstagramCard() {
    const itemsContainer = document.querySelector(".instagram-gallery-box");
    itemsContainer.innerHTML = carouselInstagramItems[currentItemIndex];
    if (window.innerWidth > 479) {
      const secondItemIndex =
        currentItemIndex + 1 >= carouselInstagramItems.length ? 0 : currentItemIndex + 1;
      itemsContainer.innerHTML += carouselInstagramItems[secondItemIndex];

      if (window.innerWidth > 767) {
        const thirdItemIndex =
          secondItemIndex + 1 >= carouselInstagramItems.length ? 0 : secondItemIndex + 1;
        itemsContainer.innerHTML += carouselInstagramItems[thirdItemIndex];
        if (window.innerWidth > 991) {
          const forthItemIndex =
            thirdItemIndex + 1 >= carouselInstagramItems.length ? 0 : thirdItemIndex + 1;
          itemsContainer.innerHTML += carouselInstagramItems[forthItemIndex];

          if (window.innerWidth > 991) {
            const fifthItemIndex =
              forthItemIndex + 1 >= carouselInstagramItems.length ? 0 : forthItemIndex + 1;
            itemsContainer.innerHTML += carouselInstagramItems[fifthItemIndex];
          }
        }
      }
    }
  }
  function showNextInstagramCard() {
    currentItemIndex =
      currentItemIndex + 1 >= carouselInstagramItems.length ? 0 : currentItemIndex + 1;
    renderInstagramCard();
  }
  function showPrevInstagramCard() {
    currentItemIndex =
      currentItemIndex - 1 < 0 ? carouselInstagramItems.length - 1 : currentItemIndex - 1;
    renderInstagramCard();
  }
  renderInstagramCard();
  const nextInstagramButton = document.querySelector(
    ".instagram-gallery-button-next"
  );
  nextInstagramButton.addEventListener("click", showNextInstagramCard);
  const prevInstagramButton = document.querySelector(
    ".instagram-gallery-button-prev"
  );
  prevInstagramButton.addEventListener("click", showPrevInstagramCard);

  window.addEventListener("resize", renderInstagramCard);
})();
