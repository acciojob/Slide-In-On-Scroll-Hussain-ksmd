// Your JS code here.
// Create a function to add active classname
const addActiveClass = () => {
  const images = document.querySelectorAll(".content img");
  images.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height/2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

// Debounce function
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Set up an event listener on the window
window.addEventListener('scroll', debounce(addActiveClass));