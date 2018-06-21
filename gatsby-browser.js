exports.onClientEntry = () => {
  if(typeof window.IntersectionObserver === 'undefined') {
    require('intersection-observer');
  }

  const testImg = document.createElement('img');
  if (
    typeof testImg.style.objectFit === 'undefined' ||
    typeof testImg.style.objectPosition === 'undefined'
  ) {
    require('object-fit-images')()
  }
}

