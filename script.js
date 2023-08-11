window.addEventListener('load', () => {
  const toast = document.getElementById('toast');

  // Function to show the toast message
  const showToast = () => {
    toast.style.display = 'block';
    setTimeout(() => {
      toast.classList.add('show-toast');
    }, 10); // Delay the slide-down animation slightly to ensure it works
  };

  // Function to hide the toast message
  const hideToast = () => {
    toast.classList.remove('show-toast');
    setTimeout(() => {
      toast.style.display = 'none';
    }, 500); // Wait for the slide-up animation to finish (0.5 seconds)
  };

  // Show the toast message after 3 seconds
  setTimeout(showToast, 1000);

  // Click event to hide the toast message after clicking anywhere on the toast
  toast.addEventListener('click', hideToast);
});

//timer
// Function to update the real-time clock and date
function updateTimeAndDate() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;
  const clockElement = document.querySelector('.real-time');
  clockElement.textContent = currentTime;

  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = now.getFullYear();
  const currentDate = `${day}/${month}/${year}`;
  const dateElement = document.querySelector('.real-date');
  dateElement.textContent = currentDate;
}

// Update the clock and date every second
setInterval(updateTimeAndDate, 1000);

// Call the updateTimeAndDate function initially to display the time and date immediately
updateTimeAndDate();




// Get the Figma image inside the icon-container
const figmaImage = document.getElementById('openModalFigma');

// Get the custom pop-up element
const customPopup = document.getElementById('customPopup');

// Get the close button element inside the custom pop-up
const closeCustomPopup = document.getElementById('closeCustomPopup');
const closeCustomPopupIcon = document.getElementById('closeCustomPopupIcon');

// Event listener to open the custom pop-up when the Figma image is clicked
figmaImage.addEventListener('click', () => {
  openCustomPopup();
});

// Event listener to close the custom pop-up when the close button or close icon is clicked
closeCustomPopup.addEventListener('click', closeCustomPopupFunction);
closeCustomPopupIcon.addEventListener('click', closeCustomPopupFunction);

// Function to open the custom pop-up
function openCustomPopup() {
  customPopup.style.display = 'block';
}

// Function to close the custom pop-up
function closeCustomPopupFunction() {
  customPopup.style.display = 'none';
}






  
  