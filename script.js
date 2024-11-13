//your JS code here. If required.
 // Function to update the screen size in the <h1> tag
        function updateScreenSize() {
            var width = window.innerWidth;  // Get the width of the window
            var height = window.innerHeight;  // Get the height of the window

            // Update the content inside the <h1> tag
            document.querySelector('#sizeInfo h1').textContent = 'Width: ' + width + ' and Height: ' + height;
        }

        // Call updateScreenSize initially to display the initial window size
        updateScreenSize();

        // Add an event listener for resizing the window
        window.addEventListener('resize', updateScreenSize);