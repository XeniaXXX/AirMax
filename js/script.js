const chooseColor = document.querySelectorAll('.choose-color-btn'),
      contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(item) {
    item.addEventListener('click', open);
});

function open(e) {
    const target = e.currentTarget,
          button = target.dataset.button,
          contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function(elem) {
        elem.classList.remove('choose-color-btn--active');
    });
    target.classList.add('choose-color-btn--active');

    contentItem.forEach(function(elem) {
        elem.classList.remove('content-item--active');
    });

    contentActive.forEach(function(elem) {
        elem.classList.add('content-item--active');
    });
}