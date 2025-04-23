// Select all image boxes and the modal window
const imgBoxes = document.querySelectorAll('.img-box');
const windowElement = document.querySelector('.window');
const fullImg = document.querySelector('.full-img');

// Add click event listeners to all image boxes
imgBoxes.forEach((imgBox) => {
  imgBox.addEventListener('click', () => {
    const imgSrc = imgBox.querySelector('img').getAttribute('src'); // Get the image source
    fullImg.setAttribute('src', imgSrc); // Set the source of the full image
    windowElement.classList.add('open'); // Open the modal window
  });
});

// Add click event listener to close the modal window
windowElement.addEventListener('click', (e) => {
  if (e.target !== fullImg) {
    windowElement.classList.remove('open'); // Close the modal window
  }
});

// Toggle text for <summary> inside <details> for all .gallery-toggle elements
const detailsElements = document.querySelectorAll('.gallery-toggle');

detailsElements.forEach((details) => {
  const summary = details.querySelector('summary');

  details.addEventListener('toggle', () => {
    summary.textContent = details.open ? 'Show Less <' : '> Show More';
  });
});
