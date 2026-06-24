// Wait until the page is loaded to display the pop-up
window.onload = function () {
    const popup = document.querySelector('.popup-text');
    if (popup) {
      popup.style.animation = 'slideDown 2s forwards'; // Start the animation when the page is loaded
    }
};


document.querySelectorAll(".circle").forEach((circle) => {
    const value = circle.getAttribute("data-percent");
    const circleProgress = circle.querySelector("circle:nth-child(2)");
    const dashOffset = 314 - (314 * value) / 100; // Calculate the offset
    circleProgress.style.strokeDashoffset = dashOffset;
  });
  

  // Open the modal and display the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'flex'; // Show the modal
    modalImage.src = imageSrc; // Set the image source to the clicked certificate image
  }
  
  // Close the modal when the background or close button is clicked
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
  }

  //home
  
  const phrases = ["I'm a Web Developer.", "I'm a Freelancer.", "I'm a Odoo developer.", "currently working as a AI associate engineer"];
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  function loopTyping() {
    isEnd = false;
    document.getElementById("dynamic-text").innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        document.getElementById("dynamic-text").innerHTML = currentPhrase.join("");
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j]);
        j--;
        document.getElementById("dynamic-text").innerHTML = currentPhrase.join("");
      }

      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }

    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(loopTyping, speed);
  }

  loopTyping();


  
