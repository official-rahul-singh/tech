
// menu start
let headerUl = document.querySelector('header nav');

function toggleButtons() {
  let header = document.querySelector("header");
  headerUl.classList.toggle("show-ul");
let cancel_btn= document.querySelector(".cancel-btn");

  if (!headerUl.classList.contains("show-ul")) {
    document.querySelector('.doc-overlay').remove();
    enableScroll();
  } else {
    let docOverlayDiv = document.createElement('div');
    header.appendChild(docOverlayDiv);
    docOverlayDiv.classList.add('doc-overlay');
    disableScroll();
    cancel_btn.style.display="block";

    docOverlayDiv.addEventListener('click', function (event) {
      headerUl.classList.remove("show-ul");
      docOverlayDiv.remove();
      enableScroll();
    });
  }
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}
// menu end



// mobile Dropdown  ============ start =====>
const navDropdowns = document.querySelectorAll(".dropdown");
navDropdowns.forEach((parentDropdown) => {
parentDropdown.addEventListener("click", function (e) {
this.classList.toggle("showMenu");
});

const subDropdowns = parentDropdown.querySelectorAll(".dropdown ul");
subDropdowns.forEach((subDropdown) => {
subDropdown.addEventListener("click", function (event) {
   event.stopPropagation(); // Prevents the click event from reaching the parent dropdown
});
});
});

// Add a click event listener to the document to close dropdowns when clicking outside
document.addEventListener("click", (e) => {
navDropdowns.forEach((dropdown) => {
if (!dropdown.contains(e.target)) {
   dropdown.classList.remove("showMenu");
}
});
});
// mobile Dropdown  ============ end =====>


// section2 number counter start =====>
function createCounter(id, maxCount) {
  let count = 0;
  let interval = setInterval(() => {
      let countElement = document.getElementById(id);
      if (!countElement) {
          console.error("Counter element with ID '" + id + "' not found.");
          clearInterval(interval);
          return;
      }
      countElement.innerHTML = ++count;
      if (count === maxCount) {
          clearInterval(interval);
      }
  }, 10);
}

// Create and start multiple counters
createCounter("counter1", 90);
createCounter("counter2", 120);
createCounter("counter3", 60);
createCounter("counter4", 3);
// section2 number counter end =======>


// testimonial slider START========
function accountSlider(slider) {
  slider.forEach(config => {
      let { className, slidesPerView, spaceBetween } = config;
      const defaultSlidesPerView = slidesPerView || 2; // Default slidesPerView if not provided
      const defaultSpaceBetween = spaceBetween || 20; // Default spaceBetween if not provided

      const sliderParent = document.querySelector('.' + className);

  if ( sliderParent ) {

    const sliderWrap = sliderParent.querySelector('.slider-wrap');
    const slideCards = sliderWrap.querySelectorAll('.slide-card');
    let currentIndex = 0;
    let slideWidth;

    function updateSlider() {
      // Update slidesPerView based on window width
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        slidesPerView = defaultSlidesPerView; // Display two slides on tablets
      } else if (window.innerWidth <= 600) {
        slidesPerView = 1; // Display one slide on mobile
      }

      // Calculate the width of the container
      const containerWidth = sliderWrap.offsetWidth;

      // Calculate the width of each slide based on the formula
      slideWidth = (containerWidth / slidesPerView) - ((slidesPerView - 1) * defaultSpaceBetween / slidesPerView);

      // Set the width and marginRight for each slide
      for (let i = 0; i < slideCards.length; i++) {
        slideCards[i].style.width = slideWidth + 'px';
        slideCards[i].style.marginRight = defaultSpaceBetween + 'px';
      }

      // Update button states after calculating slide size
      updateButtonState();
    }

    function goToNextSlide() {
      currentIndex = (currentIndex + slidesPerView) % slideCards.length;
      updateSliderPosition();
    }

    function goToPrevSlide() {
      currentIndex = (currentIndex - slidesPerView + slideCards.length) % slideCards.length;
      updateSliderPosition();
    }

    function updateSliderPosition() {
      const translateValue = -currentIndex * (slideWidth + defaultSpaceBetween);
      sliderWrap.style.transform = `translateX(${translateValue}px)`;
      updateButtonState();
    }

    function updateButtonState() {
      sliderParent.querySelector('#previous-arrow').disabled = currentIndex === 0;
      sliderParent.querySelector('#next-arrow').disabled = currentIndex + slidesPerView >= slideCards.length;
    }

    // Initial calculation of slide size
    updateSlider();

    // Recalculate slide size when the window is resized
    window.addEventListener('resize', updateSlider);

    // Attach click events to navigation buttons
    sliderParent.querySelector('#next-arrow').addEventListener('click', goToNextSlide);
    sliderParent.querySelector('#previous-arrow').addEventListener('click', goToPrevSlide);

  }
  
  });
}

// Usage
accountSlider([
  { className: 'slider-name-second', slidesPerView: 1, spaceBetween: 30 }
]);
// testimonial slider END========



// menu search ==== START==>
// let search_btn = document.querySelector(".search-btn");

let searchIcon = document.querySelector(".search-btn");
let searchForm = document.querySelector(".search-input");
let svg1 =
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
let svg2 =
    '<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
let isSvg1 = true;
searchIcon.addEventListener("click", function () {
    searchIcon.innerHTML = isSvg1 ? svg2 : svg1;
    isSvg1 = !isSvg1;

    searchForm.classList.toggle("search-bar-show");
});

// menu search ==== END==>