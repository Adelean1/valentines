let yesHoverCount = 0; // Counter for tracking hovers on "Yes" button

// Function to start the experience when the "Stefi" button is clicked
function startExperience() {
    // Shrink the "Stefi" button and wait for 250ms before continuing
    const button = document.querySelector('.initial-btn');
    button.classList.add('shrink'); // Trigger shrink animation

    // After shrinking animation, hide the button and display the main content
    setTimeout(() => {
        document.querySelector('.initial-container').style.display = 'none'; // Hide initial container
        button.classList.remove('shrink'); // Reset button's scale

        // Show the gif and heart container with animation
        const gifHeartWrapper = document.querySelector('.gif-heart-wrapper');
        gifHeartWrapper.style.opacity = '1'; // Fade in the gif container
        gifHeartWrapper.style.transform = 'scale(1)'; // Scale it to full size

        // Show the main content with animation after a delay
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block'; // Show the main container
        setTimeout(() => {
            mainContent.style.transform = 'scale(1)'; // Scale to 100%
            mainContent.style.opacity = '1'; // Fade in the main content
        }, 1); // 1ms delay for the gif-heart-wrapper to fade in before the main content
    }, 250); // Wait for 250ms before transitioning to the next part
}

// Function to handle "Yes" button click
function yesClicked() {
    // Fade out everything
    const gifHeartWrapper = document.getElementById('gif-heart-wrapper');
    const mainContent = document.getElementById('main-content');
    const videoContainer = document.getElementById('video-container');

    gifHeartWrapper.style.transition = "opacity 1s ease, transform 1s ease";
    mainContent.style.transition = "opacity 1s ease, transform 1s ease";

    gifHeartWrapper.style.opacity = "0"; // Fade out the gif and heart
    mainContent.style.opacity = "0"; // Fade out the main content
    mainContent.style.transform = "scale(0)"; // Scale down the main content

    // Wait for 2 seconds before showing the video
    setTimeout(() => {
        // Show video container with fade-in effect
        videoContainer.style.display = 'block'; // Make it visible
        videoContainer.style.opacity = '1'; // Start the fade-in effect
        videoContainer.style.transition = 'opacity 1s ease'; // Smooth transition for video appearance
    }, 2000); // Wait 2 seconds before showing the video
}

// Function to handle "No" button movement and increase the "Yes" button size
let isNoButtonMoving = false; // Flag to prevent double movement
function moveNo() {
    if (isNoButtonMoving) return; // Prevent moving twice

    isNoButtonMoving = true; // Set flag to prevent additional movements
    setTimeout(() => isNoButtonMoving = false, 300); // Reset flag after delay

    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');
    
    // Calculate random movement within a certain range
    const randomX = Math.random() * 600 - 400;
    const randomY = Math.random() * 600 - 400;
    
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Increase "Yes" button size by 10% every time "No" button is hovered
    yesHoverCount++; // Increase hover count every time "No" button is hovered
    const newScale = 1 + (0.3 * yesHoverCount); // Increase size based on hover count
    yesButton.style.transform = `scale(${newScale})`; // Apply scaling effect to "Yes" button
}

// Make "No" button move when clicked
document.querySelector('.no').addEventListener('click', moveNo);

// Ensure "Yes" button does not increase on hover, only when "No" is hovered
