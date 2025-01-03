// Select all progress bars and their values
let skillBars = document.querySelectorAll(".container-bar");

// Define progress values and speed
let progressEndValues = [90, 80, 70]; // Define the end values for HTML, CSS, and JavaScript
let speed = 10;

// Function to update progress
function updateProgress(skillBar, endValue) {
    let progressStartValue = 0;
    let progressValue = skillBar.querySelector(".progress-value");
    let circularProgress = skillBar.querySelector(".circular-progress");

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;

        // Update the circular progress bar background
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if (progressStartValue == endValue) {
            clearInterval(progress);
        }
        console.log(progressStartValue);
    }, speed);
}

// Loop through each skill bar and initialize progress
skillBars.forEach((skillBar, index) => {
    updateProgress(skillBar, progressEndValues[index]);
});



document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isDown = false;
    let startX;
    let scrollLeft;
  
    // Mouse Down Event
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    // Mouse Leave Event
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
  
    // Mouse Up Event
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
  
    // Mouse Move Event
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll sensitivity
      slider.scrollLeft = scrollLeft - walk;
    });
  
    // Auto Scroll (Optional)
    let autoScroll = setInterval(() => {
      slider.scrollLeft += 1; // Adjust scroll speed
    }, 20);
  
    slider.addEventListener("mouseenter", () => clearInterval(autoScroll));
    slider.addEventListener("mouseleave", () => {
      autoScroll = setInterval(() => {
        slider.scrollLeft += 1;
      }, 5);
       autoScroll = setInterval(() => {
        slider.scrollLeft += 1;
      }, 5);
    });
  });
  
  