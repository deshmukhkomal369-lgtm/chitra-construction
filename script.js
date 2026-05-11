
const toggleBtn = document.getElementById("toggle-btn");
const moreText = document.getElementById("more-text");


toggleBtn.addEventListener("click", function () {
  if (moreText.style.display === "block") {
    
    moreText.style.display = "none";
    toggleBtn.textContent = "Read More";
  } else {
    
    moreText.style.display = "block";
    toggleBtn.textContent = "See Less";
  }
});